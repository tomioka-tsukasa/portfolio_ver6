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

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

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

      // 表示アニメーション（初期表示のみdelayを適用）
      const animationDelay = isInitialRender.current ? delay : 0
      timeline.to(chars.map(({ innerSpan }) => innerSpan), {
        x: '0%',
        opacity: 1,
        duration: duration,
        ease: 'power2.out',
        stagger: 0.05,
        delay: animationDelay
      })

      // 初期表示フラグをfalseに設定
      isInitialRender.current = false
    } else {
      // 非表示アニメーション（delayなし）
      timeline.to(chars.map(({ innerSpan }) => innerSpan), {
        x: '-100%',
        opacity: 0,
        duration: duration,
        ease: 'power2.in',
        stagger: 0.05
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
