import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes.js'
import { Material } from 'three'

/**
 * MarchingCubes設定用の型定義
 */
export interface MarchingCubesConfig {
  /** グリッドの解像度 */
  resolution: number
  /** マテリアル */
  material: Material
  /** 等値面の閾値（アイソサーフェス） */
  isolation: number
}

/**
 * MarchingCubesオブジェクトと設定を管理する型
 */
export interface MarchingCubesManager {
  /** MarchingCubesオブジェクト */
  marchingCubes: MarchingCubes
  /** 現在の設定 */
  config: MarchingCubesConfig
  /** 親シーンオブジェクト */
  parentScene?: any
}
