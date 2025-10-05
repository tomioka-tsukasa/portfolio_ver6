'use client'

import * as styles from './PageTitleContainer.css'
import { PageTitle } from '../PageTitle/PageTitle'
import { useAppSelector } from '@/app/store/hook'

export const PageTitleContainer = () => {
  const pageStatus = useAppSelector(selector => selector.pageStatus.currentStatus)

  return (
    <div className={`${styles.root} ${pageStatus === 'home' ? styles.unactive : ''}`}>
      <div className={styles.content}>
        <div className={styles.pageTitle}>
          <PageTitle />
        </div>
        <div className={styles.console}>
          <p className={styles.consoleText}>
            Route (app) Size  First Load JS / 71.3 kB 213 kB /_not-found 975 B 103 kB First Load JS shared by all 102 kB chunks/493-f1bf56ece99de917.js 46.4 kB chunks/4bd1b696-f04ef9f43a474d97.js 53.2 kB other shared chunks (total) 2.56 kB Route (app) Size  First Load JS / 71.3 kB 213 kB /_not-found 975 B 103 kB First Load JS shared by all 102 kB chunks/493-f1bf56ece99de917.js 46.4 kB chunks/4bd1b696-f04ef9f43a474d97.js 53.2 kB other shared chunks (total) 2.56 kB Route (app) Size  First Load JS / 71.3 kB 213 kB /_not-found 975 B 103 kB First Load JS shared by all 102 kB chunks/493-f1bf56ece99de917.js 46.4 kB chunks/4bd1b696-f04ef9f43a474d97.js 53.2 kB other shared chunks (total) 2.56 kB
          </p>
        </div>
      </div>
    </div>
  )
}
