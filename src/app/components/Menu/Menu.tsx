'use client'

import { MenuList } from '../MenuList/MenuList'
import * as styles from './Menu.css'
import { useAppSelector } from '@/app/store/hook'

export const Menu = () => {
  const pageStatus = useAppSelector(selector => selector.pageStatus.currentPage)

  return (
    <div className={`${styles.root} ${pageStatus === 'menu' ? styles.active : ''}`}>
      <div className={styles.container}>
        <div className={styles.menuContent}>
          <MenuList />
        </div>
      </div>
    </div>
  )
}
