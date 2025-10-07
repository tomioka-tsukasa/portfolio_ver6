import Stats from 'stats.js'
import { StatsConfig, StatsManager } from './statsTypes'

/**
 * Stats（パフォーマンス統計情報）を初期化する関数
 * @param config - Stats設定オブジェクト
 * @returns 初期化されたStatsManagerオブジェクト
 */
export const initStats = (config: StatsConfig): StatsManager => {
  // Stats.jsインスタンスを作成
  const stats = new Stats()

  // 表示モードを設定（0: FPS, 1: ms, 2: mb）
  stats.showPanel(config.mode)

  // スタイルを設定
  const domElement = stats.dom
  domElement.style.position = 'absolute'
  domElement.style.zIndex = config.zIndex.toString()

  // 位置を設定
  if (config.position.top) domElement.style.top = config.position.top
  if (config.position.left) domElement.style.left = config.position.left
  if (config.position.right) domElement.style.right = config.position.right
  if (config.position.bottom) domElement.style.bottom = config.position.bottom

  // DOMに追加
  document.body.appendChild(domElement)

  return {
    stats,
    config
  }
}

/**
 * Stats表示位置を更新する関数
 * @param statsManager - StatsManagerオブジェクト
 * @param position - 新しい位置設定
 */
export const updateStatsPosition = (
  statsManager: StatsManager,
  position: StatsConfig['position']
): void => {
  const domElement = statsManager.stats.dom

  // 既存の位置スタイルをクリア
  domElement.style.top = ''
  domElement.style.left = ''
  domElement.style.right = ''
  domElement.style.bottom = ''

  // 新しい位置を設定
  if (position.top) domElement.style.top = position.top
  if (position.left) domElement.style.left = position.left
  if (position.right) domElement.style.right = position.right
  if (position.bottom) domElement.style.bottom = position.bottom

  // 設定を更新
  statsManager.config.position = position
}

/**
 * Stats表示モードを変更する関数
 * @param statsManager - StatsManagerオブジェクト
 * @param mode - 新しい表示モード（0: FPS, 1: ms, 2: mb）
 */
export const changeStatsMode = (statsManager: StatsManager, mode: number): void => {
  statsManager.stats.showPanel(mode)
  statsManager.config.mode = mode
}

/**
 * フレーム開始時に呼び出す関数
 * @param statsManager - StatsManagerオブジェクト
 */
export const beginStats = (statsManager: StatsManager): void => {
  statsManager.stats.begin()
}

/**
 * フレーム終了時に呼び出す関数
 * @param statsManager - StatsManagerオブジェクト
 */
export const endStats = (statsManager: StatsManager): void => {
  statsManager.stats.end()
}

/**
 * Statsの表示/非表示を切り替える関数
 * @param statsManager - StatsManagerオブジェクト
 * @param visible - 表示するかどうか
 */
export const toggleStatsVisibility = (statsManager: StatsManager, visible: boolean): void => {
  statsManager.stats.dom.style.display = visible ? 'block' : 'none'
}

/**
 * StatsのDOMエレメントを削除する関数
 * @param statsManager - StatsManagerオブジェクト
 */
export const disposeStats = (statsManager: StatsManager): void => {
  if (statsManager.stats.dom.parentNode) {
    statsManager.stats.dom.parentNode.removeChild(statsManager.stats.dom)
  }
}
