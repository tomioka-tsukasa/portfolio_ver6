'use client'

import * as styles from './AppTitle.css'
import { useAppSelector } from '@/app/store/hook'
import { useEffect, useState } from 'react'

export const AppTitle = () => {
  const pageStatus = useAppSelector(selector => selector.pageStatus.currentStatus)
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')

  useEffect(() => {
    setTitle('Tsukasa Tomioka.')
    setSubTitle('Portfolio Site.')

    // if (pageStatus === 'home') {
    //   setTitle('Tsukasa Tomioka.')
    //   setSubTitle('Portfolio Site.')
    // } else if (pageStatus !== 'menu') {
    //   setTitle(
    //     pageStatus.charAt(0).toUpperCase() + pageStatus.slice(1).toLowerCase()
    //   )
    //   setSubTitle('Tsukasa Tomioka. Portfolio Site.')
    // }
  }, [pageStatus])

  return (
    <div className={styles.root}>
      <p className={styles.title}>
        {title}
      </p>
      <p className={styles.subTitle}>
        {subTitle}
      </p>
    </div>
  )
}
