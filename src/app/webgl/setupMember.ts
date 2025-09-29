import { cameraWork } from './setup/cameraWork'
import { LoadingObject, LoadingObjects } from './loading/loadingManagerTypes'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DataTexture, Texture } from 'three'
import { WebGLCtrl } from './webglTypes'
import { GetSpotLight } from './setup/lights/lightsTypes'

/**
 * WebGLセットアップメンバー
 */
export const setupMember = {
  gui: {
    active: true,
    stats: true,
  },
  renderer: {
    active: true,
    shadow: false,
    toneMapping: 0.3,
    pixelRatio: {
      baseSize: {
        width: 1920,
        height: 1080,
      },
      wishPixelRatioPercent: 0.8,
      mobileWishPixelRatioPercent: 0.65,
      minPixelRatio: 0.8,
      groundTextureMinPixelRatio: 0.6,
    },
    groundReflection: true,
    debug: false,
    debugPixelRatioPercent: 0.5,
    targetFps: 30,
    fpsLog: false,
  },
  light: {
    directionalLight: {
      scene: false,
      helper: false,
    },
  },
  camera: cameraWork,
  controls: {
    enabled: true,
    autoRotate: false,
    debug: false,
  },
  scene: {
    environment: 'blocky_photo_studio_1k',
    background: true,
    environmentIntensity: 0.07,
  },
  postprocess: {
    active: true,
    bloomPass: {
      active: true,
      strength: 0.3,
      radius: 0.1,
      threshold: 0.85,
    },
  },
}

export const lightsMember: Record<string, Required<Parameters<GetSpotLight>[0]>> = {
}

/**
 * WebGL管理オブジェクト
 */
export const webglCtrl: WebGLCtrl = {
  renderer: null,
  camera: null,
  scene: null,
  envmaps: null,
  textures: null,
  controls: null,
  car: null,
  world: null,
}

/**
 * 3Dモデル
 */
export const loadingModels: Array<LoadingObject> = [
]

/**
 * 環境テクスチャ
 */
export const loadingEnvmaps: Array<LoadingObject> = [
  {
    name: 'blocky_photo_studio_1k',
    path: '/assets/envmap/blocky_photo_studio_1k.hdr',
  },
]

/**
 * テクスチャ
 */
export const loadingTextures: Array<LoadingObject> = [
  {
    name: 'Poliigon_PlasterPainted_7664_Metallic',
    path: '/assets/textures/Poliigon_PlasterPainted_7664_Metallic.jpg',
  },
  {
    name: 'Poliigon_PlasterPainted_7664_Roughness',
    path: '/assets/textures/Poliigon_PlasterPainted_7664_Roughness.jpg',
  },
  {
    name: 'Poliigon_PlasterPainted_7664_Normal',
    path: '/assets/textures/Poliigon_PlasterPainted_7664_Normal.png',
  },
  {
    name: 'Poliigon_PlasterPainted_7664_BaseColor',
    path: '/assets/textures/Poliigon_PlasterPainted_7664_BaseColor.jpg',
  },
]

/**
 * ローディングの型定義
 */
export const loadingAssets = {
  models: loadingModels,
  envmaps: loadingEnvmaps,
  textures: loadingTextures,
}

export type LoadingAssets = {
  models: LoadingObjects,
  envmaps: LoadingObjects,
  textures: LoadingObjects,
}

export type LoadedAssets = {
  models: {
    [key: string]: LoadedModel
  },
  envmaps: {
    [key: string]: LoadedEnvmap
  },
  textures: {
    [key: string]: LoadedTexture
  },
}

export type LoadedModel = GLTF

export type LoadedEnvmap = DataTexture

export type LoadedTexture = Texture
