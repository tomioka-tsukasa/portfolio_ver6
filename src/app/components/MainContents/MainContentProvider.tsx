'use client'

import * as styles from './MainContentProvider.css'
import { useAppSelector } from '@/app/store/hook'

export const MainContentProvider = ({ children }: { children: React.ReactNode }) => {
  const pageStatus = useAppSelector(selector => selector.pageStatus.currentPage)

  return (
    <div className={`${styles.root} ${pageStatus === 'menu' ? styles.unactive : ''}`}>
      {children}
    </div>
  )
}
