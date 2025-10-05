'use client'

import Link from 'next/link'
import { useAppDispatch } from '@/app/store/hook'
import { setCurrentPage } from '@/app/store/slice/pageStatus/pageStatus'
import type { PageId } from '@/app/store/slice/pageStatus/pageStatusTypes'
import { ComponentProps, MouseEvent, useEffect } from 'react'

interface AppLinkProps extends Omit<ComponentProps<typeof Link>, 'href' | 'onClick'> {
  href: string
  pageId?: PageId
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  children: React.ReactNode
}

export const AppLink = ({
  href,
  pageId,
  onClick,
  children,
  ...linkProps
}: AppLinkProps) => {
  const dispatch = useAppDispatch()

  // hrefからpageIdを自動推定する関数
  const inferPageIdFromHref = (href: string): PageId | null => {
    const cleanHref = href.replace(/^\/+|\/+$/g, '') // 先頭と末尾のスラッシュを除去

    if (cleanHref === '' || cleanHref === 'home') return 'home'
    if (cleanHref === 'about') return 'about'
    if (cleanHref === 'works') return 'works'
    if (cleanHref === 'blog') return 'blog'

    return null
  }

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    // カスタムonClickハンドラーがある場合は実行
    if (onClick) {
      onClick(event)
    }

    // pageIdが明示的に指定されている場合はそれを使用、なければhrefから推定
    const targetPageId = pageId || inferPageIdFromHref(href)

    if (targetPageId) {
      // pageStatusのcurrentPageを更新
      dispatch(setCurrentPage(targetPageId))

      console.log(`AppLink: Navigating to ${href}, pageId: ${targetPageId}`)
    } else {
      console.warn(`AppLink: Could not determine pageId for href: ${href}`)
    }
  }

  useEffect(() => {
    console.log(`AppLink: Navigating to ${href}, pageId: ${pageId}`)
  }, [href, pageId])

  return (
    <Link
      href={href}
      onClick={handleClick}
      {...linkProps}
    >
      {children}
    </Link>
  )
}
