import { pcOver, rvw, sp } from '@/styles/responsive.css'
import { bungeeHairline } from '@/styles/fontUtils'
import { style } from '@vanilla-extract/css'
import { colors } from '@/styles/variables'

export const root = style([
  {
    position: 'fixed',
    width: `calc(100% - (${rvw.left(24).left} * 2))`,
    height: `calc(100vh - (${rvw.bottom(16).bottom} * 2))`,
    zIndex: 3,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    transition: 'opacity 0.6s ease-in-out',
    pointerEvents: 'none',
  },
  rvw.bottom(16, '1.5%'),
  rvw.left(24, '2.5%'),
  sp({
    width: 'calc(100% - (2.5% * 2))',
    height: 'calc(100vh - (1.5% * 2))',
  }),
])

export const content = style([
  {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
  rvw.gap(120, 16),
  sp({
    flexDirection: 'row-reverse',
  }),
])

export const pageTitle = style([
  {
    flexShrink: 0,
    pointerEvents: 'visible',

  },
])

export const console = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
})

export const consoleText = style([
  {
    display: 'block',
    width: '100%',
    letterSpacing: '-0.06em',
    wordBreak: 'break-all',
    lineHeight: 1,
    overflow: 'hidden',
    backgroundColor: colors.bg.black_30,
    backdropFilter: 'blur(12px)',
    ...bungeeHairline(),
  },
  rvw.fontSize(12, '8px'),
  rvw.maxHeight('unset', '32.8px'),
  pcOver({
    fontSize: '12px',
  }),
])

export const unactive = style({
  opacity: 0,
  pointerEvents: 'none',
})
