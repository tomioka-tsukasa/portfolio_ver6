'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import * as styles from './AnimatedText.css'

interface AnimatedTextProps {
  text: string
  show: boolean
  option?: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
  duration?: number
}

export const AnimatedText = ({
  text,
  show,
  className,
  tag: Tag = 'span',
  delay = 0,
  duration = 0.2
}: AnimatedTextProps) => {
  const containerRef = useRef<HTMLElement>(null)
  const isInitialRender = useRef(true)
  const prevShow = useRef(show)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // show が false から true に変わった時、初期表示として扱う
    if (!prevShow.current && show) {
      isInitialRender.current = true
    }
    prevShow.current = show

    // テキストを1文字ずつspanで囲む
    const chars = text.split('').map((char) => {
      const outerSpan = document.createElement('span')
      const innerSpan = document.createElement('span')

      outerSpan.className = styles.outerSpan
      innerSpan.className = styles.innerSpan

      innerSpan.textContent = char === ' ' ? '\u00A0' : char // 半角スペースを全角スペースに変換

      outerSpan.appendChild(innerSpan)

      return { outerSpan, innerSpan, char }
    })

    // コンテナをクリアして新しい要素を追加
    container.innerHTML = ''
    chars.forEach(({ outerSpan }) => {
      container.appendChild(outerSpan)
    })

    const timeline = gsap.timeline()

    if (show) {
      // 初期状態
      gsap.set(chars.map(({ innerSpan }) => innerSpan), {
        x: '-100%',
        opacity: 0,
      })

      // 表示アニメーション（初期表示のみdelayを適用、文字ごとにdurationを調整）
      const animationDelay = isInitialRender.current ? delay : 0

      // 各文字に個別にアニメーションを適用（最後に向けてdurationを長く）
      chars.forEach(({ innerSpan }, index) => {
        // 文字の位置に応じてdurationを調整（最後の文字ほど長く）
        const progress = index / (chars.length - 1) // 0から1の進行度
        const adjustedDuration = duration * (1 + progress * 3) // 最後の文字は3倍のduration

        timeline.to(innerSpan, {
          x: '0%',
          opacity: 1,
          duration: adjustedDuration,
          ease: 'power4.out',
          delay: animationDelay + (index * 0.05)
        }, 0) // 全て同じ開始タイミングから
      })

      // 初期表示フラグをfalseに設定
      isInitialRender.current = false
    } else {
      // 非表示アニメーション（delayなし、最初の文字から早く消える）
      chars.forEach(({ innerSpan }, index) => {
        // 最初の文字ほど早く消える（逆順）
        const progress = (chars.length - 1 - index) / (chars.length - 1) // 1から0の進行度
        const adjustedDuration = duration * (1 + progress * 3) // 最初の文字は3倍のduration

        timeline.to(innerSpan, {
          x: '-100%',
          opacity: 0,
          duration: adjustedDuration,
          ease: 'power2.in',
          delay: index * 0.03
        }, 0)
      })
    }

    return () => {
      timeline.kill()
    }
  }, [text, show, delay, duration])

  return React.createElement(Tag, {
    ref: containerRef,
    className
  })
}
