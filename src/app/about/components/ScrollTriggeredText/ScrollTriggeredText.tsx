'use client'

import { useEffect, useState, useRef } from 'react'
import { AnimatedText } from '@/lib/AnimatedText/AnimatedText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ScrollTriggeredTextProps {
  text: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
  duration?: number
  triggerStart?: string
  once?: boolean
  progressiveDuration?: boolean
}

export const ScrollTriggeredText = ({
  text,
  className,
  tag = 'p',
  delay = 0,
  duration = 0.05,
  triggerStart = 'top 80%',
  once = true,
  progressiveDuration = false
}: ScrollTriggeredTextProps) => {
  const [showText, setShowText] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!triggerRef.current) return

    // ScrollTrigger を作成
    const scrollTrigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: triggerStart, // 要素の上端がビューポートの指定位置に来たときに発火
      onEnter: () => {
        setShowText(true)
      },
      once: once // 一度だけ実行するかどうか
    })

    // クリーンアップ
    return () => {
      scrollTrigger.kill()
    }
  }, [triggerStart, once])

  return (
    <div ref={triggerRef}>
      <AnimatedText
        text={text}
        show={showText}
        className={className}
        tag={tag}
        delay={delay}
        duration={duration}
        progressiveDuration={progressiveDuration}
      />
    </div>
  )
}
