'use client'

import * as styles from './BlogItem.css'
import { animateMetaballColor } from '@/app/webgl/animation/metaballColorAnimation/metaballColorAnimation'

export interface Tag {
  name: string
  id: string
}

export interface BlogItemProps {
  title: string
  tags: Tag[]
  desc: string
  icon: string
  date: string
}

export const BlogItem = ({
  title,
  tags,
  desc,
  icon,
  date,
}: BlogItemProps) => {
  // workItemホバー時のメタボール色変更
  const handleWorkItemHover = () => {
    animateMetaballColor('yellow', 1.5, 'power2.out')
  }

  // workItemホバー解除時のメタボール色復元
  const handleWorkItemLeave = () => {
    animateMetaballColor('blue', 1.5, 'power2.out')
  }

  return <>
    <div
      className={styles.root}
      onMouseEnter={handleWorkItemHover}
      onMouseLeave={handleWorkItemLeave}
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
    </div>
  </>
}
