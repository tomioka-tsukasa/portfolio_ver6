'use client'

import * as styles from './MenuItem.css'
import { AppLink } from '@/components/ui/AppLink/AppLink'
import { useState } from 'react'

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
  const [isHovered, setIsHovered] = useState(false)

  const content = (
    <div
      className={`${styles.root} ${unactive ? styles.unactive : ''} ${isHovered ? styles.hovered : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
    return <AppLink
      href={href}
      className={`${styles.root} ${unactive ? styles.unactive : ''} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </AppLink>
  }

  return content
}
