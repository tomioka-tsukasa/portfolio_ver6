'use client'

import { createWebGL } from '../../webgl/webgl'
import { useEffect } from 'react'
import { destroyGUI } from '../../webgl/gui/gui'
import { memo } from 'react'
import { useAppDispatch } from '@/app/store/hook'
import { setLoadComplete } from '../../store/slice/loadingStore/loadingStore'
import { webglCtrl } from '../../webgl/setupMember'

/**
 * キャンバスコンポーネント
 * ・`./Canvas.tsx` でダイナミックインポートしている
 * ・マスクは CanvasMask コンポーネントが別途担当
 */
const OriginalCanvas = () => {
  const dispatch = useAppDispatch()

  /**
   * キャンバスの作成
   */
  useEffect(() => {
    if (webglCtrl.loadComplete) return

    createWebGL(
      () => {
        webglCtrl.loadComplete = true
        dispatch(setLoadComplete())
      },
    )

    return () => {
      // アンマウント時はGUIを破棄
      destroyGUI()
    }
  }, [dispatch])

  return <>
    <canvas id='canvas' />
  </>
}

export default memo(OriginalCanvas)
