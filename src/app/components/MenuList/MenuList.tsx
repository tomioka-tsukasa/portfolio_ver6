'use client'

import { setCurrentPage } from '@/app/store/slice/pageStatus/pageStatus'
import { MenuItem } from '../MenuItem/MenuItem'
import * as styles from './MenuList.css'
import { useAppDispatch } from '@/app/store/hook'
import { PageId } from '@/modules/pageChanger/pageChangerTypes'

export interface MenuListProps {
  items?: Array<{
    text: string
    id?: PageId
    status?: 'default' | 'current'
  }>
  currentPath?: PageId
}

export const MenuList = ({
  items = [
    { text: 'Home.', id: 'home' },
    { text: 'About.', id: 'about' },
    { text: 'Works.', id: 'works' },
    { text: 'Blog.', id: 'blog' }
  ],
  currentPath = 'home'
}: MenuListProps) => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.root}>
      {items.map((item, index) => (
        <div key={index} className={styles.menuItemWrapper}>
          <MenuItem
            onClick={() => dispatch(setCurrentPage(item.id as PageId))}
            text={item.text}
            status={item.status || (currentPath === item.id ? 'current' : 'default')}
            href={item.id === 'home' ? '/' : `/${item.id}`}
          />
        </div>
      ))}
    </div>
  )
}
