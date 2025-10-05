import { pcOver, rvw, sp } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 1,
  width: '100%',
  height: '100vh',
})

export const content = style({
  backgroundColor: colors.bg.black_50,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  padding: '54px 54px 54px 0',
  ...sp({
    padding: '48px 24px',
  }),
})

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  width: '50%',
  ...sp({
    gap: '24px',
    width: '100%',
  }),
})

export const text = style([
  {
    color: colors.text.white,
    lineHeight: '170%',
    fontSize: '14px',
    maxWidth: '540px',
  },
  rvw.width('100%', '100%'),
  sp({
    fontSize: '12px',
    maxWidth: '100%',
  }),
  pcOver({
    ...rvw.fontSize(14),
    ...rvw.maxWidth(540),
  }),
])
