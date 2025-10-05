import * as styles from './MenuItem.css'
import { AppLink } from '@/components/ui/AppLink/AppLink'

export interface MenuItemProps {
  text: string
  href?: string
  onClick?: () => void
  unactive?: boolean
}

export const MenuItem = ({
  text,
  href,
  onClick,
  unactive = false
}: MenuItemProps) => {
  const content = (
    <div className={`${styles.root} ${unactive ? styles.unactive : ''}`} onClick={onClick}>
      <div className={styles.textWrapper}>
        <p className={`${styles.text}`}>
          {text}
        </p>
        {unactive && <div className={styles.textStrikethrough} />}
      </div>
      <div className={styles.borderWrapper}>
        <div className={styles.border} />
      </div>
    </div>
  )

  if (href) {
    return <AppLink href={href} className={`${styles.root} ${unactive ? styles.unactive : ''}`}>{content}</AppLink>
  }

  return content
}
