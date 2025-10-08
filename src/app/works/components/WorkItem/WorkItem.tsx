'use client'

import { ImageProps } from 'next/image'
import * as styles from './WorkItem.css'
import { UiImage } from '@/components/ui/Image/UiImage'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { AnimatedText } from '@/lib/AnimatedText/AnimatedText'
import { useAppSelector } from '@/app/store/hook'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export interface Tag {
  name: string
  id: string
}

export interface WorkItemProps {
  id: string
  number: string
  title: string
  tags: Tag[]
  desc: string
  image: ImageProps
  date: string
}

export const WorkItem = ({
  id,
  number,
  title,
  tags,
  desc,
  image,
  date,
}: WorkItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const pageStatus = useAppSelector((state) => state.pageStatus.currentStatus)
  const itemRef = useRef<HTMLAnchorElement>(null)

  // ScrollTrigger を使用してビューポート検知
  useEffect(() => {
    if (pageStatus === 'works' && itemRef.current) {
      // ScrollTrigger を作成
      const scrollTrigger = ScrollTrigger.create({
        trigger: itemRef.current,
        start: 'top 85%', // 要素の上端がビューポートの85%位置に来たときに発火
        onEnter: () => {
          setShowTitle(true)
        },
        once: true // 一度だけ実行
      })

      // クリーンアップ
      return () => {
        scrollTrigger.kill()
      }
    }
  }, [pageStatus])

  return <>
    <Link
      ref={itemRef}
      href={`./${id}`}
      className={`${styles.root} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-work-id={id}
    >
      <div className={styles.content}>
        <div className={styles.number}>
          {number}
        </div>
        <div className={styles.title}>
          <AnimatedText
            text={title}
            show={showTitle}
            className={styles.title}
            delay={0.5}
          />
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
      <div className={styles.imageContainer}>
        <UiImage {...image} width={1512} height={850.5} />
      </div>
    </Link>
  </>
}
