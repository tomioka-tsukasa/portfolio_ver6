import { rvw, sp } from '@/styles/responsive.css'
import { bungeeHairline } from '@/styles/fontUtils'
import { style } from '@vanilla-extract/css'

export const root = style({
  position: 'fixed',
  width: `calc(100% - (${rvw.left(24, 10).left} * 2))`,
  height: `calc(100vh - (${rvw.bottom(16, 6).bottom} * 2))`,
  zIndex: 3,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  transition: 'opacity 0.6s ease-in-out',
  pointerEvents: 'none',
  ...rvw.bottom(16, 6),
  ...rvw.left(24, 10),
})

export const content = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  width: '100%',
  ...rvw.gap(120, 6),
  ...sp({
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    ...rvw.gap(24, 24),
  }),
})

export const pageTitle = style({
  flexShrink: 0,
  pointerEvents: 'visible',
})

export const console = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
})

export const consoleText = style({
  display: 'block',
  width: '100%',
  letterSpacing: '-0.06em',
  wordBreak: 'break-all',
  lineHeight: 1,
  ...bungeeHairline(),
  ...rvw.fontSize(12, 8),
})

export const unactive = style({
  opacity: 0,
  pointerEvents: 'none',
})
