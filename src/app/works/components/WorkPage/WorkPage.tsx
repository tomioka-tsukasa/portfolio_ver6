import { BackListPage } from '@/app/components/BackListPage/BackListPage'
import * as styles from './WorkPage.css'
import { UiImage } from '@/components/ui/Image/UiImage'
import { ImageProps } from 'next/image'

interface WorkPageProps {
  title: string
  desc: string
  thumbnail: ImageProps
  pageUrl?: string
  body: React.ReactNode
}

export const WorkPage = ({
  title,
  desc,
  thumbnail,
  pageUrl,
  body,
}: WorkPageProps) => {
  return <>
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.thumbnail}>
          <UiImage {...thumbnail} width={1512} height={850.5} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            {title}
          </div>
          <div className={styles.desc}>
            {desc}
          </div>
          {pageUrl && <div className={styles.info}>
            <div className={styles.pageUrl}>
              <span className={styles.pageUrlLabel}>
                URL:
              </span>
              <a href={pageUrl} target='_blank' className={styles.pageUrlValue}>
                {pageUrl}
              </a>
            </div>
          </div>}
          <main className={styles.body}>
            {body}
          </main>
          <div className={styles.backListPage}>
            <BackListPage text='Back Works List.' href='/works' />
          </div>
        </div>
      </div>
    </div>
  </>
}
