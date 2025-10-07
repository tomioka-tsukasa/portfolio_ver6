import { ImageProps } from 'next/image'
import * as styles from './WorkItem.css'
import { UiImage } from '@/components/ui/Image/UiImage'

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
  return <>
    <div className={styles.root} data-work-id={id}>
      <div className={styles.content}>
        <div className={styles.number}>
          {number}
        </div>
        <div className={styles.title}>
          {title}
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
    </div>
  </>
}
