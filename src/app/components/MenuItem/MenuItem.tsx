import Link from 'next/link'
import * as styles from './MenuItem.css'

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
    return <Link href={href} className={styles.root}>{content}</Link>
  }

  return content
}
