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
    height: '100vh',
  },
  sp({
    justifyContent: 'flex-start',
    height: '64vh',
  }),
])

export const content = style([
  {
    backgroundColor: colors.bg.black_50,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    maxHeight: '57%',
    overflowY: 'scroll',
    overscrollBehavior: 'none',
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE and Edge
    selectors: {
      '&::-webkit-scrollbar': {
        display: 'none', // Chrome, Safari, Opera
      },
    },
  },
  rvw.padding([48, 48, 48, '0'], [32, 24]),
  sp({
    height: '100%',
    maxHeight: '100%',
    backgroundColor: colors.bg.black_60,
  }),
])

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  width: '48%',
  ...sp({
    gap: '24px',
    width: '100%',
  }),
})

export const text = style([
  {
    color: colors.text.white,
    lineHeight: '200%',
    maxWidth: '540px',
  },
  rvw.fontSize(14, '12px'),
  rvw.width('100%', '100%'),
  sp({
    maxWidth: '100%',
  }),
  pcOver({
    ...rvw.fontSize(14),
    ...rvw.maxWidth(540),
  }),
])
