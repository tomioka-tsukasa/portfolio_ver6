import * as THREE from 'three'
import * as DAT from 'dat.gui'

// シェーダーのインポート
import vertexShader from './shader/vertex.glsl'
import fragmentShader from './shader/fragment.glsl'

// モジュールのインポート
import { initMarchingCubes, getMaterials, changeMaterial, changeResolution, changeIsolation } from './modules/marchingCubes/marchingCubes'
import { MetaballGenerator } from './modules/metaballGenerator/metaballGenerator'
import { initStats, beginStats, endStats, disposeStats } from './modules/stats/stats'
import gsap from 'gsap'

// 型のインポート
import { MarchingCubesConfig } from './modules/marchingCubes/marchingCubesTypes'
import { MetaballConfig } from './modules/metaballGenerator/metaballGeneratorTypes'
import { StatsConfig } from './modules/stats/statsTypes'
import { webglCtrl } from '../setupMember'

/**
 * メタボール実装のメイン関数
 * Three.js公式のMarching Cubesサンプルをベースに、
 * 機能ごとにモジュール化したメタボール実装
 *
 * @param scene - 既存のThree.jsシーンオブジェクト（webgl.tsから渡される）
 * @returns cleanup関数とanimate関数を含むオブジェクト
 */
export const metaball = (
  scene: THREE.Scene,
) => {
  const marchingCubesConfig: MarchingCubesConfig = {
    resolution: 50,
    isolation: 60,
    // material: new THREE.MeshNormalMaterial({
    //   side: THREE.DoubleSide,
    // }),
    // material: new THREE.MeshPhongMaterial({
    //   color: 0xffffff,
    //   specular: 0xffffff,
    //   shininess: 30,
    //   envMap: webglCtrl.envmaps?.[setupMember.scene.environment],
    // }),
    // material: new THREE.MeshPhongMaterial({
    //   color: 0xffffff,
    //   specular: 0xffffff,
    //   shininess: 30,
    //   wireframe: true,
    //   envMap: webglCtrl.envmaps?.[setupMember.scene.environment],
    // }),
    material: new THREE.ShaderMaterial({
      uniforms : {
        viewVector: { value: webglCtrl.camera?.position || new THREE.Vector3() },//initial camera.position
        uColor: { value: new THREE.Color(0xffffff)},// Default
        // uColor: { value: new THREE.Color(0x42a9f1)},// Blue
        // uColor: { value: new THREE.Color(0xF14242)},// Red
        // uColor: { value: new THREE.Color(0x42F171)},// Green
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uPos: { value: 0.0 },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      blending: THREE.CustomBlending,
      transparent:true,
    }),
  }

  const metaballConfig: MetaballConfig = {
    speed: 0.2,
    numBlobs: 4,
    strength: 1.6,
    subtract: 10,
    enableColors: true,
    showFloor: false,
  }

  const statsConfig: StatsConfig = {
    position: { top: '0', left: '0' },
    zIndex: 1000,
    mode: 0
  }

  // 各モジュールの初期化
  const marchingCubesManager = initMarchingCubes(marchingCubesConfig)
  const metaballGenerator = new MetaballGenerator(metaballConfig)
  const statsManager = initStats(statsConfig)
  statsManager.stats.dom.style.display = 'none'

  // 親シーンを設定（解像度変更時に必要）
  marchingCubesManager.parentScene = scene

  // MarchingCubesオブジェクトをシーンに追加
  scene.add(marchingCubesManager.marchingCubes)

  // GUI設定（dat.GUI）
  const gui = new DAT.GUI()
  gui.domElement.style.display = 'none'
  setupGUI(gui, {
    marchingCubesManager,
    metaballGenerator,
    statsManager
  })

  // アニメーション用の時間管理
  let lastTime = 0

  // 設定アニメーション用の現在値
  const currentAnimatedConfig = {
    speed: metaballConfig.speed,
  }
  let configAnimationTimeline: gsap.core.Timeline | null = null

  // アニメーション関数（外部のアニメーションループから呼び出される）
  const animate = (currentTime: number) => {
    const deltaTime = (currentTime - lastTime) * 0.001
    lastTime = currentTime

    // Stats開始
    beginStats(statsManager)

    // アニメーション中の設定を適用
    metaballGenerator.updateConfig({ speed: currentAnimatedConfig.speed })

    // メタボールの更新
    metaballGenerator.updateMetaballs(marchingCubesManager, deltaTime)

    // Stats終了
    endStats(statsManager)
  }

  // ウィンドウリサイズ対応
  const handleResize = () => {
    // 必要に応じてメタボール関連の要素をリサイズ
    // 現在の実装では特別な処理は不要
  }
  window.addEventListener('resize', handleResize)

  // クリーンアップ関数
  const cleanup = () => {
    window.removeEventListener('resize', handleResize)
    scene.remove(marchingCubesManager.marchingCubes)
    disposeStats(statsManager)
    gui.destroy()
  }

  // アニメーション関数
  const animateToMenuState = (duration: number = 2) => {
    // 既存のアニメーションを停止
    if (configAnimationTimeline) {
      configAnimationTimeline.kill()
    }

    // 新しいタイムラインを作成
    configAnimationTimeline = gsap.timeline()

    // speed を 0.2 から 0.6 にアニメーション
    configAnimationTimeline.to(currentAnimatedConfig, {
      speed: 0.6,
      duration,
      ease: 'power2.inOut',
      onComplete: () => {
        configAnimationTimeline = null
      }
    })

    // 振幅もアニメーション
    metaballGenerator.animateAmplitude({
      amplitudeX: 0.25,
      amplitudeY: 0.21,
      amplitudeZ: 0.28,
    }, duration)
  }

  const animateToHomeState = (duration: number = 2) => {
    // 既存のアニメーションを停止
    if (configAnimationTimeline) {
      configAnimationTimeline.kill()
    }

    // 新しいタイムラインを作成
    configAnimationTimeline = gsap.timeline()

    // speed を 0.6 から 0.2 にアニメーション
    configAnimationTimeline.to(currentAnimatedConfig, {
      speed: 0.2,
      duration,
      ease: 'power2.inOut',
      onComplete: () => {
        configAnimationTimeline = null
      }
    })

    // 振幅もアニメーション
    metaballGenerator.animateAmplitude({
      amplitudeX: 0.15,
      amplitudeY: 0.01,
      amplitudeZ: 0.18,
    }, duration)
  }

  // animate関数とcleanup関数、アニメーション関数、管理オブジェクトを返す
  return {
    animate,
    cleanup,
    animateToMenuState,
    animateToHomeState,
    marchingCubesManager,
    metaballGenerator,
    statsManager,
  }
}

/**
 * GUI設定を行う関数
 */
function setupGUI(
  gui: DAT.GUI,
  managers: {
    marchingCubesManager: ReturnType<typeof initMarchingCubes>
    metaballGenerator: MetaballGenerator
    statsManager: ReturnType<typeof initStats>
  }
) {
  const { marchingCubesManager, metaballGenerator } = managers

  // メタボール設定フォルダ
  const metaballFolder = gui.addFolder('Metaball Settings')
  gui.close()
  const config = metaballGenerator.getConfig()

  metaballFolder.add(config, 'speed', 0.1, 3.0).name('Animation Speed').onChange((value: number) => {
    metaballGenerator.updateConfig({ speed: value })
  })

  metaballFolder.add(config, 'numBlobs', 1, 20).step(1).name('Number of Blobs').onChange((value: number) => {
    metaballGenerator.updateConfig({ numBlobs: value })
  })

  metaballFolder.add(config, 'strength', 0.1, 3.0).name('Blob Strength').onChange((value: number) => {
    metaballGenerator.updateConfig({ strength: value })
  })

  metaballFolder.add(config, 'subtract', 1, 20).step(1).name('Subtraction').onChange((value: number) => {
    metaballGenerator.updateConfig({ subtract: value })
  })

  metaballFolder.add(config, 'enableColors').name('Enable Colors').onChange((value: boolean) => {
    metaballGenerator.updateConfig({ enableColors: value })
  })

  metaballFolder.add(config, 'showFloor').name('Show Floor').onChange((value: boolean) => {
    metaballGenerator.updateConfig({ showFloor: value })
  })

  metaballFolder.open()

  // Marching Cubes設定フォルダ
  const marchingCubesFolder = gui.addFolder('Marching Cubes Settings')

  const materials = Object.keys(getMaterials())
  const currentMaterial = 'normal'
  marchingCubesFolder.add({ material: currentMaterial }, 'material', materials).name('Material').onChange((value: string) => {
    changeMaterial(marchingCubesManager, value)
  })

  marchingCubesFolder.add(marchingCubesManager.config, 'resolution', 10, 100).step(1).name('Resolution').onChange((value: number) => {
    changeResolution(marchingCubesManager, value)
  })

  marchingCubesFolder.add(marchingCubesManager.config, 'isolation', 10, 300).name('Isolation').onChange((value: number) => {
    changeIsolation(marchingCubesManager, value)
  })

  marchingCubesFolder.open()
}
