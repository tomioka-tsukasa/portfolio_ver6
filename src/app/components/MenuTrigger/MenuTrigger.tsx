'use client'

import { useAppDispatch, useAppSelector } from '@/app/store/hook'
import * as styles from './MenuTrigger.css'
import { createPageChanger } from '@/modules/pageChanger/pageChanger'

export const MenuTrigger = () => {
  const pageStatus = useAppSelector(selector => selector.pageStatus.currentStatus)
  const dispatch = useAppDispatch()
  const pageChanger = createPageChanger(dispatch)

  return (
    <div
      className={`${styles.root} ${pageStatus === 'menu' ? styles.open : ''}`}
      onClick={() => {
        if (pageStatus === 'menu') {
          pageChanger({ pageId: 'back' })
        } else {
          pageChanger({ pageId: 'menu' })
        }
      }}
    >
      <div className={styles.triggerContainer}>
        <div className={styles.triggerLine} />
        <div className={styles.triggerLine} />
      </div>
    </div>
  )
}
