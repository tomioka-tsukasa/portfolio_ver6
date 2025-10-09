'use client'

import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/store/hook'
import { createPageChanger } from '@/modules/pageChanger/pageChanger'
import * as styles from './HomeContent.css'
import { ScrollUi } from '../ScrollUi/ScrollUi'
import { AnimatedText } from '@/lib/AnimatedText/AnimatedText'
import gsap from 'gsap'

export const HomeContent = () => {
  const dispatch = useAppDispatch()
  const pageStatus = useAppSelector(state => state.pageStatus.currentStatus)
  const loadComplete = useAppSelector(state => state.loadingStore.loadComplete)
  const scrollUiRef = useRef<HTMLDivElement>(null)
  const pageChanger = createPageChanger(dispatch)

  const [showTitle, setShowTitle] = useState(false)
  const [showSubTitle, setShowSubTitle] = useState(false)

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

    // アニメーションテキストを非表示にしてからページ遷移
    if (scrollUiRef.current) {
      const timeline = gsap.timeline()

      timeline
        .call(() => {
          setShowTitle(false)
          setShowSubTitle(false)
        })
        .to(scrollUiRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out'
        }, '+=0.7')
        .call(() => {
          pageChanger({ pageId: 'menu' })
        }, [], '-=0.5')
    }
  }

  // ページ状態とローディング完了による表示制御
  useEffect(() => {
    if (pageStatus === 'home' && loadComplete) {
      // homeページでローディング完了時、アニメーションテキストを表示（delayはAnimatedTextで制御）
      setShowTitle(true)
      setShowSubTitle(true)

      // ScrollUIの表示
      if (scrollUiRef.current) {
        gsap.to(scrollUiRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          delay: 1.3
        })
      }
    } else if (pageStatus !== 'home') {
      // homeページ以外の場合、アニメーション状態をリセット
      setShowTitle(false)
      setShowSubTitle(false)
    }
  }, [pageStatus, loadComplete])

  // 初期表示時のアニメーション
  useEffect(() => {
    if (loadComplete) {
      // ローディング完了時、アニメーションテキストを表示（delayはAnimatedTextで制御）
      setShowTitle(true)
      setShowSubTitle(true)

      if (scrollUiRef.current) {
        gsap.set(scrollUiRef.current, { opacity: 0 })
        gsap.to(scrollUiRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          delay: 1.6
        })
      }
    }
  }, [loadComplete])

  return <>
    <div className={styles.root}>
      <main className={styles.main}>
        <AnimatedText
          text='Tsukasa Tomioka'
          show={showTitle}
          className={styles.title}
          tag='h1'
          delay={0.8}
          duration={0.32}
          progressiveDuration={true}
        />
        <AnimatedText
          text='Portfolio Site.'
          show={showSubTitle}
          className={styles.subTitle}
          tag='p'
          delay={0.7}
          duration={0.24}
          progressiveDuration={true}
        />
      </main>
      <div onClick={entryHandler} ref={scrollUiRef}>
        <ScrollUi />
      </div>
    </div>
  </>
}
