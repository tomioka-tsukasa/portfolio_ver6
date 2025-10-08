'use client'

import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/store/hook'
import { createPageChanger } from '@/modules/pageChanger/pageChanger'
import * as styles from './HomeContent.css'
import { ScrollUi } from '../ScrollUi/ScrollUi'
import gsap from 'gsap'

export const HomeContent = () => {
  const dispatch = useAppDispatch()
  const pageStatus = useAppSelector(state => state.pageStatus.currentStatus)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subTitleRef = useRef<HTMLParagraphElement>(null)
  const scrollUiRef = useRef<HTMLDivElement>(null)
  const pageChanger = createPageChanger(dispatch)

  // スクロール検知
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0 && !scrollTriggered) {
  //       dispatch(setScrollTriggered(true))
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [dispatch, scrollTriggered])

  // アニメーション実行
  const entryHandler = () => {
    if (titleRef.current && subTitleRef.current && scrollUiRef.current) {
      const timeline = gsap.timeline()

      timeline
        .to(titleRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out'
        })
        .to(subTitleRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out'
        }, '-=0.2')
        .to(scrollUiRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out'
        }, '-=0.4')
        .call(() => {
          pageChanger({ pageId: 'menu' })
        }, [], '-=0.5')
    }
  }

  // menu -> home 戻り時の再表示アニメーション
  useEffect(() => {
    if (pageStatus === 'home' && titleRef.current && subTitleRef.current && scrollUiRef.current) {
      const timeline = gsap.timeline()

      timeline
        .to(titleRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
        }, '-=0.2')
        .to(subTitleRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
        }, '-=0.3')
        .to(scrollUiRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
        }, '-=0.4')

      return () => {
        timeline.kill()
      }
    }
  }, [pageStatus, dispatch])

  return <>
    <div className={styles.root}>
      <main className={styles.main}>
        <h1 ref={titleRef} className={styles.title}>
          Tsukasa Tomioka
        </h1>
        <p ref={subTitleRef} className={styles.subTitle}>
          Portfolio Site.
        </p>
      </main>
      <div onClick={entryHandler} ref={scrollUiRef}>
        <ScrollUi />
      </div>
    </div>
  </>
}
