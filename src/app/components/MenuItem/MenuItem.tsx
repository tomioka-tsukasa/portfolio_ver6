import * as styles from './MenuItem.css'
import { AppLink } from '@/components/ui/AppLink/AppLink'

export interface MenuItemProps {
  text: string
  status?: 'default' | 'current'
  href?: string
  onClick?: () => void
}

export const MenuItem = ({
  text,
  status = 'default',
  href,
  onClick
}: MenuItemProps) => {
  const content = (
    <div className={styles.root} onClick={onClick}>
      <div className={styles.textWrapper}>
        <p className={`${status === 'current' ? styles.textCurrent : ''} ${styles.text}`}>
          {text}
        </p>
        {status === 'current' && <div className={styles.textStrikethrough} />}
      </div>
      <div className={styles.borderWrapper}>
        <div className={styles.border} />
      </div>
    </div>
  )

  if (href) {
    return <AppLink href={href} className={styles.root}>{content}</AppLink>
  }

  return content
}
