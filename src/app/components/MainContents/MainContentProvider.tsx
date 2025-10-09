'use client'

import * as styles from './MainContentProvider.css'
import { useAppSelector } from '@/app/store/hook'

export const MainContentProvider = ({ children }: { children: React.ReactNode }) => {
  const pageStatus = useAppSelector(selector => selector.pageStatus.currentStatus)
  const isTransitioning = useAppSelector(selector => selector.transitionState.isTransitioning)

  const getClassName = () => {
    if (isTransitioning) {
      return `${styles.root} ${styles.transitioning}`
    }

    if (pageStatus === 'menu') {
      return `${styles.root} ${styles.unactive}`
    }

    return styles.root
  }

  return (
    <div className={getClassName()}>
      {children}
    </div>
  )
}
