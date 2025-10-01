import { Scene, PerspectiveCamera, WebGLRenderer, Light } from 'three'

/**
 * シーン設定用の型定義
 */
export interface SceneConfig {
  /** カメラの視野角 */
  fov: number
  /** カメラのアスペクト比 */
  aspect: number
  /** カメラの近距離クリップ面 */
  near: number
  /** カメラの遠距離クリップ面 */
  far: number
  /** カメラの初期位置 */
  cameraPosition: {
    x: number
    y: number
    z: number
  }
}

/**
 * シーンオブジェクトを管理する型
 */
export interface SceneManager {
  /** Three.jsシーン */
  scene: Scene
  /** パースペクティブカメラ */
  camera: PerspectiveCamera
  /** WebGLレンダラー */
  renderer: WebGLRenderer
  /** ライト配列 */
  lights: Light[]
  /** 現在の設定 */
  config: SceneConfig
}
