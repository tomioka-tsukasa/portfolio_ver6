import { Color } from 'three'
import { MarchingCubesManager } from '../marchingCubes/marchingCubesTypes'
import { MetaballConfig, MetaballState } from './metaballGeneratorTypes'

/**
 * メタボール生成器クラス
 * Three.js公式のMarching Cubesサンプルをベースに、
 * メタボールの位置計算とMarchingCubesフィールドの更新を行う
 */
export class MetaballGenerator {
  private config: MetaballConfig
  private metaballStates: MetaballState[] = []
  private time = 0

  constructor(config: MetaballConfig) {
    this.config = config
    this.initMetaballStates()
  }

  /**
   * 各メタボールの初期状態を設定（公式アルゴリズムでは不要だが互換性のため残す）
   */
  private initMetaballStates(): void {
    this.metaballStates = []
    for (let i = 0; i < this.config.numBlobs; i++) {
      this.metaballStates.push({
        timeX: 0,
        timeY: 0,
        timeZ: 0,
        speedFactor: 1.0
      })
    }
  }

  /**
   * メタボール設定を更新
   * @param newConfig - 新しい設定オブジェクト
   */
  updateConfig(newConfig: Partial<MetaballConfig>): void {
    const oldNumBlobs = this.config.numBlobs
    this.config = { ...this.config, ...newConfig }

    // メタボール数が変更された場合は状態を再初期化
    if (oldNumBlobs !== this.config.numBlobs) {
      this.initMetaballStates()
    }
  }

  /**
   * メタボールフィールドを更新し、MarchingCubesに適用する
   * @param marchingCubesManager - MarchingCubesマネージャー
   * @param deltaTime - 前フレームからの経過時間
   */
  updateMetaballs(marchingCubesManager: MarchingCubesManager, deltaTime: number): void {
    this.time += deltaTime * this.config.speed

    const { marchingCubes } = marchingCubesManager

    // MarchingCubesフィールドをクリア
    marchingCubes.reset()

    // Three.js公式の位置計算アルゴリズム
    const rainbow = [
      new Color(0xff0000),  // 赤
      new Color(0xffbb00),  // オレンジ
      new Color(0xffff00),  // 黄
      new Color(0x00ff00),  // 緑
      new Color(0x0000ff),  // 青
      new Color(0x9400bd),  // 紫
      new Color(0xc800eb)   // マゼンタ
    ]
    const subtract = this.config.subtract
    const strength = this.config.strength / ((Math.sqrt(this.config.numBlobs) - 1) / 4 + 1)

    // 各メタボールを処理
    for (let i = 0; i < this.config.numBlobs; i++) {
      // Three.js公式の複雑な位置計算
      // // X軸の位置計算
      // const ballx = Math.sin(i + 1.26 * this.time * this.config.speed * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5

      // // Y軸の位置計算
      // const bally = Math.abs(Math.cos(i + 1.12 * this.time * this.config.speed * Math.cos(1.22 + 0.1424 * i))) * 0.77

      // // Z軸の位置計算
      // const ballz = Math.cos(i + 1.32 * this.time * this.config.speed * 0.1 * Math.sin(0.92 + 0.53 * i)) * 0.27 + 0.5

      // ==========================================
      // メタボール位置計算パラメータの詳細解説
      // ==========================================

      // 【1. 位相（Phase）】- 初期位置のずれ
      // 各メタボールの初期位置をずらす（i = メタボール番号）
      const phaseX = i                    // X軸の位相
      const phaseY = i                    // Y軸の位相
      const phaseZ = i                    // Z軸の位相
      // 変更例: i * 2.0（より大きな初期位置差）、i * 0.5（より小さな初期位置差）

      // 【2. 基本周波数】- 基本的な動きの速さ
      const baseFreqX = 1.26              // X軸の基本周波数（動きの速さ）
      const baseFreqY = 1.12              // Y軸の基本周波数（動きの速さ）
      const baseFreqZ = 1.32              // Z軸の基本周波数（動きの速さ）
      // 変更例: 2.0（2倍速）、0.5（半分の速度）、0.8（ゆったりした動き）

      // 【3. 個別係数】- メタボール毎の個性（複雑なパターンを作る）
      const individualFactorX = 1.03 + 1.5 * Math.cos(0.21 * i)    // X軸の個別係数
      const individualFactorY = Math.cos(1.22 + 0.1424 * i)        // Y軸の個別係数
      const individualFactorZ = 1.03 + 1.5 * Math.sin(0.92 + 0.53 * i)    // Z軸の個別係数
      // 変更例: 1.0（固定）、1.0 + 1.0 * Math.cos(0.5 * i)（より大きな個別差）

      // 【4. 振幅（Amplitude）】- 動きの範囲
      const amplitudeX = 0.15             // X軸の振幅（動きの範囲）
      const amplitudeY = 0.15             // Y軸の振幅（動きの範囲）
      const amplitudeZ = 0.15             // Z軸の振幅（動きの範囲）
      // 変更例: 0.5（より大きな動き）、0.1（より小さな動き）

      // 【5. 中心位置（Center）】- 動きの基準点
      const centerX = 0.5                 // X軸の中心位置（0.0=左端、0.5=中央、1.0=右端）
      const centerY = 0.6                 // Y軸の中心位置（0.0=床、1.0=天井）
      const centerZ = 0.5                 // Z軸の中心位置（0.0=手前、0.5=中央、1.0=奥）
      // 変更例: 0.2（左寄り）、0.8（右寄り）

      // 【6. Y軸の特殊処理】- 床に沈まない効果
      const useAbsForY = true             // Y軸でMath.abs()を使用するか（床に沈まない）
      // 変更例: false（床より下にも動く）

      // ==========================================
      // 実際の位置計算
      // ==========================================

      // X軸の位置計算
      const ballx = Math.sin(
        phaseX + baseFreqX * this.time * individualFactorX
      ) * amplitudeX + centerX

      // Y軸の位置計算（床に沈まない特殊処理）
      const rawY = Math.cos(
        phaseY + baseFreqY * this.time * individualFactorY
      ) * amplitudeY + centerY
      const bally = useAbsForY ? Math.abs(rawY) : rawY

      // Z軸の位置計算
      const ballz = Math.cos(
        phaseZ + baseFreqZ * this.time * individualFactorZ
      ) * amplitudeZ + centerZ

      // 色を有効にしている場合は虹色で追加
      if (this.config.enableColors) {
        marchingCubes.addBall(ballx, bally, ballz, strength, subtract, rainbow[i % 7])
      } else {
        marchingCubes.addBall(ballx, bally, ballz, strength, subtract)
      }
    }

    // 床を追加（公式と同じ位置）
    if (this.config.showFloor) {
      marchingCubes.addPlaneY(2, 12)
    }

    // MarchingCubesを更新してメッシュを生成
    marchingCubes.update()
  }

  /**
   * 現在の設定を取得
   * @returns 現在のメタボール設定
   */
  getConfig(): MetaballConfig {
    return { ...this.config }
  }

  /**
   * 現在の時間を取得
   * @returns 現在のアニメーション時間
   */
  getTime(): number {
    return this.time
  }

  /**
   * 時間をリセット
   */
  resetTime(): void {
    this.time = 0
    this.initMetaballStates()
  }
}
