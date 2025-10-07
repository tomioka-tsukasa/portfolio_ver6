'use client'

import * as styles from './CanvasMask.css'
import { useEffect, useState } from 'react'
import { useAppSelector } from '@/app/store/hook'

/**
 * Canvas用のマスクコンポーネント
 * ページ状態に応じてblur効果を切り替える
 */
export const CanvasMask = () => {
  const pageStatus = useAppSelector(selector => selector.pageStatus.currentStatus)
  const [canvasClassName, setCanvasClassName] = useState<'defaultType' | 'aboutType' | 'worksType' | 'blogType'>('defaultType')

  useEffect(() => {
    if (pageStatus === 'about') {
      setCanvasClassName('aboutType')
    } else if (pageStatus === 'works') {
      setCanvasClassName('worksType')
    } else if (pageStatus === 'blog') {
      setCanvasClassName('blogType')
    } else {
      setCanvasClassName('defaultType')
    }
  }, [pageStatus])

  return <div className={`${styles.root} ${styles[canvasClassName]}`} />
}
