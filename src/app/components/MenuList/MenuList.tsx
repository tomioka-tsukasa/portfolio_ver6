import { MenuItem } from '../MenuItem/MenuItem'
import * as styles from './MenuList.css'

export interface MenuListProps {
  items?: Array<{
    text: string
    id?: string
    status?: 'default' | 'current'
  }>
  currentPath?: string
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
  return (
    <div className={styles.root}>
      {items.map((item, index) => (
        <div key={index} className={styles.menuItemWrapper}>
          <MenuItem
            text={item.text}
            status={item.status || (currentPath === item.id ? 'current' : 'default')}
            href={item.id}
          />
        </div>
      ))}
    </div>
  )
}
