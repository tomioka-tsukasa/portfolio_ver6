import * as THREE from 'three'
import { LoadedAssets } from './setupMember'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MarchingCubesManager } from './metaball/modules/marchingCubes/marchingCubesTypes'
import { MetaballGenerator } from './metaball/modules/metaballGenerator/metaballGenerator'
import { StatsManager } from './metaball/modules/stats/statsTypes'
import { PageId } from '../store/slice/pageStatus/pageStatusTypes'

/**
 * WebGLを生成する関数の型
 */
export type CreateWebGL = (
  loadingComplete: () => void,
) => void

/**
 * WebGLを初期化する関数の型
 */
export type InitWebGL = (
  loadingComplete: () => void,
  loadedAssets: LoadedAssets,
) => void

/**
 * WebGL管理オブジェクト
 */
export type WebGLCtrl = {
  renderer: THREE.WebGLRenderer | null
  camera: THREE.Camera | null
  scene: THREE.Scene | null
  envmaps: LoadedAssets['envmaps'] | null
  textures: LoadedAssets['textures'] | null
  controls: OrbitControls | null
  car: GLTF | null
  world: GLTF | null
  pageStatus: PageId,
  metaballController: {
    animate: (timestamp: number) => void
    cleanup: () => void
    animateToMenuState: (duration?: number) => void
    animateToHomeState: (duration?: number) => void
    marchingCubesManager: MarchingCubesManager
    metaballGenerator: MetaballGenerator
    statsManager: StatsManager
  } | null
}
