import { pcOver, rvw, sp } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const root = style([
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    width: '100%',
  },
  sp({
    justifyContent: 'flex-start',
  }),
])


export const textContainer = style([
  {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  rvw.padding([120, 0, 140, '50%'], [64, 24, 96]),
  sp({
    width: '100%',
  }),
])

export const text = style([
  {
    color: colors.text.white_60,
    lineHeight: '180%',
    // maxWidth: '540px',
    fontWeight: '600',
    width: '100%',
    whiteSpace: 'pre',
  },
  rvw.fontSize(24, 14),
  sp({
    lineHeight: '160%',
  }),
  pcOver({
    // ...rvw.fontSize(14),
    // ...rvw.maxWidth(540),
  }),
])

export const paragraphSpacing = style([
  rvw.marginTop(54, 32),
])
