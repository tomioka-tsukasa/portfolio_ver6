'use client'

import Link from 'next/link'
import * as styles from './BlogItem.css'

export interface Tag {
  name: string
  id: string
}

export interface BlogItemProps {
  title: string
  url: string
  tags: Tag[]
  desc: string
  icon: string
  date: string
  isHovered?: boolean
}

export const BlogItem = ({
  title,
  url,
  tags,
  desc,
  icon,
  date,
  // isHovered = false,
}: BlogItemProps) => {
  // const [isHovered, setIsHovered] = useState(false)

  return <>
    <Link
      className={`${styles.root}`}
      href={url}
      target='_blank'
    >
      <div className={styles.titleContainer}>
        <div className={styles.iconContainer}>
          {icon}
        </div>
        <div className={styles.title}>
          {title}
        </div>
      </div>
      <div className={styles.desc}>
        {desc}
      </div>
      <div className={styles.tags}>
        {tags.map((tag, i, arr) => (
          <div className={styles.tag} key={i}>
            {tag.name}
            {i !== arr.length - 1 && ', '}
          </div>
        ))}
      </div>
      <div className={styles.date}>
        {date}
      </div>
    </Link>
  </>
}
