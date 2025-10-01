import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  PointLight,
  AmbientLight,
  Color,
  Object3D
} from 'three'
import { SceneConfig, SceneManager } from './sceneSetupTypes'

/**
 * Three.jsシーンを初期化する関数
 * @param canvas - WebGLレンダリング用のCanvasエレメント
 * @param config - シーン設定オブジェクト
 * @returns 初期化されたSceneManagerオブジェクト
 */
export const initScene = (canvas: HTMLCanvasElement, config: SceneConfig): SceneManager => {
  // シーンを作成
  const scene = new Scene()
  scene.background = new Color(0x050505)

  // カメラを作成
  const camera = new PerspectiveCamera(
    config.fov,
    config.aspect,
    config.near,
    config.far
  )
  camera.position.set(
    config.cameraPosition.x,
    config.cameraPosition.y,
    config.cameraPosition.z
  )

  // レンダラーを作成
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true
  })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // ライトを設定
  const lights = setupLights(scene)

  return {
    scene,
    camera,
    renderer,
    lights,
    config
  }
}

/**
 * シーンのライティングを設定する関数
 * @param scene - Three.jsシーン
 * @returns 作成されたライト配列
 */
const setupLights = (scene: Scene) => {
  const lights = []

  // 環境光（全体的な明るさ）
  const ambientLight = new AmbientLight(0x222222, 0.4)
  scene.add(ambientLight)
  lights.push(ambientLight)

  // メインの指向性ライト
  const directionalLight1 = new DirectionalLight(0xffffff, 0.8)
  directionalLight1.position.set(1, 1, 1)
  scene.add(directionalLight1)
  lights.push(directionalLight1)

  // サブの指向性ライト（逆方向から）
  const directionalLight2 = new DirectionalLight(0x887766, 0.4)
  directionalLight2.position.set(-1, -1, -1)
  scene.add(directionalLight2)
  lights.push(directionalLight2)

  // ポイントライト（動的な照明効果用）
  const pointLight1 = new PointLight(0xff6644, 0.6, 0)
  pointLight1.position.set(2, 2, 2)
  scene.add(pointLight1)
  lights.push(pointLight1)

  const pointLight2 = new PointLight(0x4466ff, 0.6, 0)
  pointLight2.position.set(-2, -2, -2)
  scene.add(pointLight2)
  lights.push(pointLight2)

  return lights
}

/**
 * カメラのアスペクト比を更新する関数
 * @param sceneManager - SceneManagerオブジェクト
 * @param width - 新しい幅
 * @param height - 新しい高さ
 */
export const updateCameraAspect = (sceneManager: SceneManager, width: number, height: number): void => {
  sceneManager.camera.aspect = width / height
  sceneManager.camera.updateProjectionMatrix()
  sceneManager.renderer.setSize(width, height)
  sceneManager.config.aspect = width / height
}

/**
 * レンダリングを実行する関数
 * @param sceneManager - SceneManagerオブジェクト
 */
export const render = (sceneManager: SceneManager): void => {
  sceneManager.renderer.render(sceneManager.scene, sceneManager.camera)
}

/**
 * シーンにオブジェクトを追加する関数
 * @param sceneManager - SceneManagerオブジェクト
 * @param object - 追加するThree.jsオブジェクト
 */
export const addToScene = (sceneManager: SceneManager, object: Object3D): void => {
  sceneManager.scene.add(object)
}

/**
 * シーンからオブジェクトを削除する関数
 * @param sceneManager - SceneManagerオブジェクト
 * @param object - 削除するThree.jsオブジェクト
 */
export const removeFromScene = (sceneManager: SceneManager, object: Object3D): void => {
  sceneManager.scene.remove(object)
}

/**
 * リソースを解放する関数
 * @param sceneManager - SceneManagerオブジェクト
 */
export const dispose = (sceneManager: SceneManager): void => {
  sceneManager.renderer.dispose()
  sceneManager.scene.clear()
}
