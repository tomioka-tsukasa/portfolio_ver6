'use client'

import * as styles from './HomeContent.css'
import { ScrollUi } from '../ScrollUi/ScrollUi'
import { useAppDispatch, useAppSelector } from '@/app/store/hook'
import { createPageChanger } from '@/modules/pageChanger/pageChanger'

export const HomeContent = () => {
  const dispatch = useAppDispatch()
  const pageStatus = useAppSelector(selector => selector.pageStatus.currentPage)
  const pageChanger = createPageChanger(dispatch)

  const handleMainClick = () => {
    if (pageStatus === 'home') {
      pageChanger({ pageId: 'menu' })
    } else if (pageStatus === 'menu') {
      pageChanger({ pageId: 'home' })
    }
  }

  return <>
    <div className={`${styles.root} ${pageStatus === 'home' ? '' : styles.unactive}`}>
      <main className={styles.main} onClick={handleMainClick}>
        <h1 className={styles.title}>
          Tsukasa Tomioka
        </h1>
        <p className={styles.subTitle}>
          Portfolio Site.
        </p>
      </main>
      <ScrollUi />
    </div>
  </>
}
