import * as THREE from 'three'

// セットアップ
import { getCamera, getControls, getRenderer, getCameraInfo } from './setup/setup'
import { loadingAssets, setupMember, webglCtrl } from './setupMember'
import { CreateWebGL, InitWebGL } from './webglTypes'

// ポストプロセッシング
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

// パフォーマンス
// import Stats from 'stats.js'
import { setFpsManager } from '@/lib/threejs/setFpsManager/setFpsManager'

// ローディング
import { loadingManager } from './loading/loadingManager'

// シェーダーのインポート
import vertexShader from './metaball/shader/vertex.glsl'
import fragmentShader from './metaball/shader/fragment.glsl'

// GUI
// import { setSceneGUI } from './gui/setter/scene/setSceneGUI'
// import { setCameraGUI } from './gui/setter/camera/setCameraGUI'
// import { setPostprocessGUI } from './gui/setter/postprocess/setPostprocessGUI'
import { fixCamerawork } from '@/lib/threejs/fixCamerawork/fixCamerawork'
import { metaball } from './metaball/metaball'
import { cameraWork as cameraWorkConfig } from './cameraWork'

/**
 * 【WebGLの初期化】
 * ・全ての処理が完了した後に loadingComplete を呼び出す
 * ・グローバルストア等で完了通知を行う想定
 */
const initWebGL: InitWebGL = (
  loadingComplete,
  loadedAssets,
) => {
  const canvas = document.querySelector('#canvas') as HTMLCanvasElement

  if (!canvas) {
    console.error('canvas not found')

    return
  }

  /**
   * Stats
   */
  // const stats = new Stats()
  // stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
  // if (setupMember.gui.stats) {
  //   document.body.appendChild(stats.dom)
  // }

  /**
   * FPSマネージャー
   */
  const fpsManager = setFpsManager(
    setupMember.renderer.targetFps,
    {
      log: setupMember.renderer.fpsLog,
    },
  )

  /**
   * シーン
   */
  const scene = new THREE.Scene()
  if (setupMember.scene.environment) {
    // シーン設定
    scene.environment = loadedAssets.envmaps[setupMember.scene.environment] || null
    scene.background = setupMember.scene.background ? loadedAssets.envmaps[setupMember.scene.environment] : null
    scene.environmentIntensity = setupMember.scene.environmentIntensity

    // シーンのGUI設定
    // setSceneGUI(
    //   scene,
    //   loadedAssets.envmaps[setupMember.scene.environment],
    //   {
    //     environmentIntensity: setupMember.scene.environmentIntensity,
    //     background: setupMember.scene.background,
    //   },
    // )
  }

  /**
   * レンダラー
   */
  const renderer = getRenderer(
    canvas,
    setupMember.renderer,
  )

  /**
   * カメラ設定 - 現在のページに対応するカメラワークを使用
   */
  const currentCameraConfig = cameraWorkConfig[webglCtrl.pageId || 'home'] || cameraWorkConfig.home

  console.log('WebGL: Using camera config for page:', webglCtrl.pageId || 'home', currentCameraConfig)

  const cameraWork = fixCamerawork(
    currentCameraConfig.position,
    currentCameraConfig.target,
    currentCameraConfig.rotation,
  )

  const camera = getCamera(cameraWork)

  // デバッグ用のコントロール（必要時のみ有効化）
  const controls = setupMember.controls.enabled ? getControls(
    camera,
    renderer,
    cameraWork.target,
  ) : null

  // if (setupMember.gui.active) setCameraGUI(camera, cameraWork)

  // カメラの動きをログに出力
  if (controls) getCameraInfo(camera, controls)

  /**
   * 光源設定
   */


  /**
   * 環境光設定
   */
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  directionalLight.position.set(0, 20, -50)
  const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight)

  if (setupMember.light.directionalLight.scene) {
    scene.add(directionalLight)
  }

  if (setupMember.light.directionalLight.helper) {
    scene.add(directionalLightHelper)
  }

  /**
   * メッシュ設定
   */
  const mesh = (() => {
    const geo = new THREE.SphereGeometry(10, 32, 32)
    const mat = new THREE.ShaderMaterial({
      uniforms : {
        viewVector: { value: new THREE.Vector3(0, 0, 20)},//initial camera.position
        uColor: { value: new THREE.Color(0x42a9f1)},// GrowColor
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      blending: THREE.CustomBlending,
      transparent:true,
    })

    const mesh = new THREE.Mesh(geo, mat)

    return mesh
  })()
  mesh.position.set(0, 10, 0)

  /**
   * グリッドヘルパー
   */
  // const gridHelper = new THREE.GridHelper(100, 100)

  /**
   * メタボール
   */
  const metaballController = metaball(scene)

  /**
   * シーン追加
   */
  scene.add(
    camera,
    // gridHelper,
    // mesh,
  )

  /**
   * ポストプロセッシング
   */
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight), // サイズ
    setupMember.postprocess.bloomPass.strength, // 強さ
    setupMember.postprocess.bloomPass.radius, // ブルームの半径
    setupMember.postprocess.bloomPass.threshold, // ブルームの強さ
  )
  composer.addPass(bloomPass)

  // GUI設定
  // if (setupMember.gui.active) setPostprocessGUI(
  //   bloomPass,
  //   {
  //     bloomPass: setupMember.postprocess.bloomPass
  //   },
  // )

  /**
   * アニメーション
   */
  // let prevTime = performance.now()
  // const targetFPS = 60

  const renderProcess = () => {
    if (setupMember.postprocess.active) {
      // ポストプロセッシングレンダリングを実行
      composer.render()
    } else {
      // 通常レンダリングを実行
      renderer.render(scene, camera)
    }
  }

  if (!setupMember.renderer.active) {
    fpsManager.rendering(0, renderProcess)
  }

  function animate(
    timestamp: number,
  ) {
    // レンダリングを停止している場合はアニメーションを停止
    if (!setupMember.renderer.active) {
      return
    }

    /**
     * パフォーマンス管理
     */
    // stats.begin()
    // const currentTime = performance.now()
    // const delta = (currentTime - prevTime) / 1000 // 秒単位
    // const deltaFPS = delta * targetFPS
    // prevTime = currentTime

    /**
     * アップデート関数
     */
    if (controls && controls.enabled) {
      controls.update()
      controls.enabled = setupMember.controls.enabled
      controls.autoRotate = setupMember.controls.autoRotate
    }

    if (setupMember.light.directionalLight.helper) {
      directionalLightHelper.update()
    }

    /**
     * メタボールのアニメーション
     */
    metaballController?.animate(timestamp)

    /**
     * レンダリング
     */
    fpsManager.rendering(timestamp, renderProcess)

    /**
     * パフォーマンス
     */
    // stats.end()
  }
  renderer.setAnimationLoop(animate)

  /**
   * 管理オブジェクト設定
   */
  webglCtrl.renderer = renderer
  webglCtrl.camera = camera
  webglCtrl.scene = scene
  webglCtrl.envmaps = loadedAssets.envmaps
  webglCtrl.textures = loadedAssets.textures
  webglCtrl.controls = controls
  webglCtrl.metaballController = metaballController

  /**
   * リサイズハンドラー - スクロールバーの影響を考慮
   */
  const handleResize = () => {
    // ビューポートサイズを使用（スクロールバーの影響を受けない）
    const displayWidth = window.innerWidth
    const displayHeight = window.innerHeight

    // カメラのアスペクト比を更新
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.aspect = displayWidth / displayHeight
      camera.updateProjectionMatrix()
    }

    // レンダラーのサイズを更新
    renderer.setSize(displayWidth, displayHeight)

    // ポストプロセッシングがある場合はcomposerも更新
    if (composer) {
      composer.setSize(displayWidth, displayHeight)

      // BloomPassのサイズも更新
      const bloomPass = composer.passes.find(pass => pass instanceof UnrealBloomPass) as UnrealBloomPass
      if (bloomPass) {
        bloomPass.setSize(displayWidth, displayHeight)
      }
    }

    // メタボールのシェーダーユニフォームも更新
    if (webglCtrl.metaballController?.marchingCubesManager?.marchingCubes?.material) {
      const material = webglCtrl.metaballController.marchingCubesManager.marchingCubes.material as THREE.ShaderMaterial
      if (material.uniforms?.uResolution) {
        material.uniforms.uResolution.value.set(displayWidth, displayHeight)
      }
    }

    console.log('WebGL resized:', { displayWidth, displayHeight })
  }

  // リサイズイベントリスナーを追加
  // window.addEventListener('resize', handleResize)

  // 初回リサイズを実行（初期化時のサイズ調整）
  handleResize()

  /**
   * 初期化完了通知
   */
  loadingComplete()
}

/**
 * 【WebGLを生成】
 * ・<Canvas /> コンポーネントで一度だけ実行される想定
 * ・モデル等全てのローディングを loadingManager で処理した後に initWebGL を実行
 */
export const createWebGL: CreateWebGL = (
  loadingComplete,
) => {
  if (!window) return

  loadingManager(
    (loadedAssets) => {
      initWebGL(
        loadingComplete,
        loadedAssets,
      )
    },
    loadingAssets,
  )
}
