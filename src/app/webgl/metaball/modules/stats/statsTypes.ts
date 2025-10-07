import Stats from 'stats.js'

/**
 * Stats設定用の型定義
 */
export interface StatsConfig {
  /** Statsパネルの表示位置 */
  position: {
    top?: string
    left?: string
    right?: string
    bottom?: string
  }
  /** Statsパネルのz-index */
  zIndex: number
  /** 表示するモード（0: FPS, 1: ms, 2: mb） */
  mode: number
}

/**
 * Statsオブジェクトを管理する型
 */
export interface StatsManager {
  /** Stats.jsオブジェクト */
  stats: Stats
  /** 現在の設定 */
  config: StatsConfig
}
