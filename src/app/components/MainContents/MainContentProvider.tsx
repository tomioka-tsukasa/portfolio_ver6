'use client'

import * as styles from './MainContentProvider.css'
import { useAppSelector } from '@/app/store/hook'
import { useEffect, useState } from 'react'

export const MainContentProvider = ({ children }: { children: React.ReactNode }) => {
  const pageStatus = useAppSelector(selector => selector.pageStatus.currentStatus)
  const [canvasClassName, setCanvasClassName] = useState<'defaultType' | 'aboutType'>('defaultType')

  useEffect(() => {
    if (pageStatus === 'about') {
      setCanvasClassName('aboutType')
    } else {
      setCanvasClassName('defaultType')
    }
  }, [pageStatus])

  return (
    <div className={`${styles.root} ${pageStatus === 'menu' ? styles.unactive : ''} ${styles[canvasClassName]}`}>
      {children}
    </div>
  )
}
