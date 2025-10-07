'use client'

import * as styles from './Canvas.css'
import { createWebGL } from '../../webgl/webgl'
import { useEffect, useState } from 'react'
import { destroyGUI } from '../../webgl/gui/gui'
import { memo } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/store/hook'
import { setLoadComplete } from '../../store/slice/loadingStore/loadingStore'

/**
 * キャンバスコンポーネント
 * ・`./Canvas.tsx` でダイナミックインポートしている
 */
const OriginalCanvas = () => {
  const dispatch = useAppDispatch()
  const pageStatus = useAppSelector(selector => selector.pageStatus.currentStatus)
  const [canvasClassName, setCanvasClassName] = useState<'defaultType' | 'aboutType' | 'worksType'>('defaultType')

  useEffect(() => {
    if (pageStatus === 'about') {
      setCanvasClassName('aboutType')
    } else if (pageStatus === 'works') {
      setCanvasClassName('worksType')
    } else {
      setCanvasClassName('defaultType')
    }
  }, [pageStatus])

  /**
   * キャンバスの作成
   */
  useEffect(() => {
    createWebGL(
      () => {
        dispatch(setLoadComplete())
      },
    )

    return () => {
      // アンマウント時はGUIを破棄
      destroyGUI()
    }
  }, [dispatch])

  return <>
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={`${styles.mask} ${styles[canvasClassName]}`} />
        <canvas id='canvas' className={`${styles.canvas}`} />
      </div>
    </div>
  </>
}

export default memo(OriginalCanvas)
