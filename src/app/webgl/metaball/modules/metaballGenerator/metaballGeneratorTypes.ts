/**
 * メタボール生成設定用の型定義
 */
export interface MetaballConfig {
  /** メタボールの数 */
  numBlobs: number
  /** アニメーション速度 */
  speed: number
  /** メタボールの強度 */
  strength: number
  /** サブトラクション（負の影響）の強度 */
  subtract: number
  /** 色の変化を有効にするか */
  enableColors: boolean
  /** 床を表示するか */
  showFloor: boolean
}

/**
 * 個別のメタボールの状態
 */
export interface MetaballState {
  /** X座標のアニメーション時間 */
  timeX: number
  /** Y座標のアニメーション時間 */
  timeY: number
  /** Z座標のアニメーション時間 */
  timeZ: number
  /** アニメーション速度係数 */
  speedFactor: number
}
