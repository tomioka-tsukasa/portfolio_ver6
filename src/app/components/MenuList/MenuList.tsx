'use client'

import { setCurrentStatus } from '@/app/store/slice/pageStatus/pageStatus'
import { MenuItem } from '../MenuItem/MenuItem'
import * as styles from './MenuList.css'
import { useAppDispatch, useAppSelector } from '@/app/store/hook'
import { PageStatus } from '@/app/store/slice/pageStatus/pageStatusTypes'
import { createPageChanger } from '@/modules/pageChanger/pageChanger'

export interface MenuListProps {
  items?: Array<{
    text: string
    id?: PageStatus
    status?: 'default' | 'current'
  }>
}

export const MenuList = ({
  items = [
    { text: 'Home.', id: 'home' },
    { text: 'About.', id: 'about' },
    { text: 'Works.', id: 'works' },
    { text: 'Blog.', id: 'blog' }
  ],
}: MenuListProps) => {
  const dispatch = useAppDispatch()
  const pageChanger = createPageChanger(dispatch)
  const currentPage = useAppSelector(selector => selector.pageStatus.currentPage)

  const clickHandler = (id: PageStatus) => {
    pageChanger({ pageId: id })
    dispatch(setCurrentStatus(id))
  }

  return (
    <div className={styles.root}>
      {items.map((item, index) => (
        <div key={index} className={styles.menuItemWrapper}>
          <MenuItem
            onClick={() => clickHandler(item.id as PageStatus)}
            text={item.text}
            unactive={currentPage === item.id ? true : false}
            href={item.id === 'home' ? '/' : `/${item.id}`}
          />
        </div>
      ))}
    </div>
  )
}
