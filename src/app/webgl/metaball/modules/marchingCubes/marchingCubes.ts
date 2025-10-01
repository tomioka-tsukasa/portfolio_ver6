import * as THREE from 'three'
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes.js'
import { MarchingCubesConfig, MarchingCubesManager } from './marchingCubesTypes'
import { setupMember, webglCtrl } from '@/app/webgl/setupMember'

// シェーダーのインポート
import vertexShader from '../../shader/vertex.glsl'
import fragmentShader from '../../shader/fragment.glsl'

/**
 * MarchingCubesオブジェクトを初期化する関数
 * @param config - MarchingCubes設定オブジェクト
 * @returns 初期化されたMarchingCubesManagerオブジェクト
 */
export const initMarchingCubes = (config: MarchingCubesConfig): MarchingCubesManager => {
  // MarchingCubesオブジェクトを作成
  const marchingCubes = new MarchingCubes(config.resolution, config.material, true, true, 100000)

  // 初期設定を適用
  marchingCubes.scale.set(40, 40, 40)
  marchingCubes.position.set(0, 29, 0)
  marchingCubes.enableUvs = false
  marchingCubes.enableColors = false
  marchingCubes.isolation = config.isolation

  return {
    marchingCubes,
    config
  }
}

/**
 * 利用可能なマテリアル一覧を取得する関数
 * @returns マテリアル名とマテリアルオブジェクトのマップ
 */
export const getMaterials = () => {
  return {
    'basic': new THREE.MeshBasicMaterial({ color: 0xff9000, transparent: true }),
    'phong': new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0xffffff, shininess: 30, envMap: webglCtrl.envmaps?.[setupMember.scene.environment], }),
    'normal': new THREE.MeshNormalMaterial(),
    'shader': new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 1.0 },
        viewVector: { value: webglCtrl.camera?.position || new THREE.Vector3() },
        // uResolution: { value: new THREE.Vector2() }
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    }),
    'wireframe': new THREE.MeshPhongMaterial({ color: 0xff9000, wireframe: true, transparent: true })
  }
}

/**
 * マテリアルを変更する関数
 * @param manager - MarchingCubesManagerオブジェクト
 * @param materialName - 変更するマテリアル名
 */
export const changeMaterial = (manager: MarchingCubesManager, materialName: string): void => {
  const materials = getMaterials()
  const newMaterial = materials[materialName as keyof typeof materials]

  if (newMaterial) {
    manager.marchingCubes.material = newMaterial
    manager.config.material = newMaterial
  }
}

/**
 * 解像度を変更する関数
 * @param manager - MarchingCubesManagerオブジェクト
 * @param resolution - 新しい解像度
 */
export const changeResolution = (manager: MarchingCubesManager, resolution: number): void => {
  const oldMaterial = manager.marchingCubes.material as THREE.Material
  const oldIsolation = manager.marchingCubes.isolation
  const oldMarchingCubes = manager.marchingCubes

  // 新しい解像度でMarchingCubesを再作成
  const newMarchingCubes = new MarchingCubes(resolution, oldMaterial, true, true, 100000)
  newMarchingCubes.position.copy(oldMarchingCubes.position)
  newMarchingCubes.scale.copy(oldMarchingCubes.scale)
  newMarchingCubes.enableUvs = oldMarchingCubes.enableUvs
  newMarchingCubes.enableColors = oldMarchingCubes.enableColors
  newMarchingCubes.isolation = oldIsolation

  // シーンから古いオブジェクトを削除して新しいオブジェクトを追加
  if (manager.parentScene) {
    manager.parentScene.remove(oldMarchingCubes)
    manager.parentScene.add(newMarchingCubes)
  }

  // 古いジオメトリとマテリアルをクリーンアップ
  if (oldMarchingCubes.geometry) {
    oldMarchingCubes.geometry.dispose()
  }

  // 古いオブジェクトを新しいものに置き換え
  manager.marchingCubes = newMarchingCubes
  manager.config.resolution = resolution
}

/**
 * アイソレーション値を変更する関数
 * @param manager - MarchingCubesManagerオブジェクト
 * @param isolation - 新しいアイソレーション値
 */
export const changeIsolation = (manager: MarchingCubesManager, isolation: number): void => {
  manager.marchingCubes.isolation = isolation
  manager.config.isolation = isolation
}
