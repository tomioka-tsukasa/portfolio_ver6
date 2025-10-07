'use client'

import { useEffect } from 'react'
import { PageId, PageStatus } from '@/app/store/slice/pageStatus/pageStatusTypes'
import { webglCtrl } from '@/app/webgl/setupMember'
import { cameraWork as cameraWorkConfig } from '@/app/webgl/cameraWork'
import { metaballAnimationConfigs, COLOR_PATTERN_VALUES } from '@/app/webgl/metaballMember'
import { fixCamerawork } from '@/lib/threejs/fixCamerawork/fixCamerawork'
import { usePathname } from 'next/navigation'
import { setCurrentPage, setCurrentStatus } from '@/app/store/slice/pageStatus/pageStatus'
import { useAppDispatch } from '@/app/store/hook'
import * as THREE from 'three'

/**
 * URLパスからPageIdを取得
 */
const getPageIdFromPath = (pathname: string): PageId => {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '').toLowerCase()
  switch (cleanPath) {
    case '':
    case 'home':
      return 'home'
    case 'about':
      return 'about'
    case 'works':
      return 'works'
    case 'blog':
      return 'blog'
    default:
      return 'home'
  }
}

export const PageInitProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const pageId = getPageIdFromPath(pathname)

    console.log('PageInitProvider: pathname changed to', pathname, '→', pageId)

    // webglCtrlを更新
    webglCtrl.pageId = pageId
    webglCtrl.pageStatus = pageId as PageStatus

    // WebGLが初期化済みなら、実際のカメラとコントロールも更新
    if (webglCtrl.camera && webglCtrl.controls) {
      const currentCameraConfig = cameraWorkConfig[pageId] || cameraWorkConfig.home
      const cameraWork = fixCamerawork(
        currentCameraConfig.position,
        currentCameraConfig.target,
        currentCameraConfig.rotation,
      )

      console.log('PageInitProvider: Updating camera to position:', cameraWork.position, 'target:', cameraWork.target)

      // カメラ位置を更新
      webglCtrl.camera.position.set(cameraWork.position.x, cameraWork.position.y, cameraWork.position.z)

      // カメラのターゲット（向き）を更新
      webglCtrl.camera.lookAt(cameraWork.target.x, cameraWork.target.y, cameraWork.target.z)

      // コントロールのターゲットを更新
      webglCtrl.controls.target.set(cameraWork.target.x, cameraWork.target.y, cameraWork.target.z)
      webglCtrl.controls.update()
    }

    // メタボールのカラーパターンを更新
    if (webglCtrl.metaballController?.marchingCubesManager?.marchingCubes?.material) {
      const material = webglCtrl.metaballController.marchingCubesManager.marchingCubes.material as THREE.ShaderMaterial
      if (material.uniforms?.uColorPattern) {
        const currentMetaballAnimationConfig = metaballAnimationConfigs[pageId] || metaballAnimationConfigs.home

        const targetPattern = COLOR_PATTERN_VALUES[currentMetaballAnimationConfig.colorPattern] ?? COLOR_PATTERN_VALUES.blue
        material.uniforms.uColorPattern.value = targetPattern

        // uColorは常に白に保つ
        if (material.uniforms?.uColor) {
          material.uniforms.uColor.value.setRGB(1, 1, 1)
        }

        console.log('PageInitProvider: Updated color pattern to:', currentMetaballAnimationConfig.colorPattern, '(', targetPattern, ')')
      }
    }

    // Reduxストアを更新
    dispatch(setCurrentPage(pageId))
    dispatch(setCurrentStatus(pageId as PageStatus))

    console.log('PageInitProvider: webglCtrl updated', { pageId: webglCtrl.pageId, pageStatus: webglCtrl.pageStatus })
  }, [pathname, dispatch])

  return <>{children}</>
}
