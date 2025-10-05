import { rvw, sp } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const root = style([
  {
    position: 'fixed',
    zIndex: 3,
    transition: 'opacity 0.6s ease-in-out',
    cursor: 'pointer',
  },
  rvw.right(32),
  rvw.top(24),
])

export const open = style({
  pointerEvents: 'visible',
})

export const triggerContainer = style([
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rvw.width(48, 36),
  rvw.gap(12, 8),
  sp({
    maxWidth: '48px',
  }),
])

export const triggerLine = style([
  {
    width: '100%',
    backgroundColor: colors.text.white_80,
    selectors: {
      ['&:nth-child(1)']: {
        transition: 'all 0.4s cubic-bezier(0, 0.5, 0.5, 1) 0.1s',
        transformOrigin: 'left bottom',
      },
      ['&:nth-child(2)']: {
        transition: 'all 0.3s cubic-bezier(0, 0.5, 0.5, 1) 0s',
      },
      [`${open} &:nth-child(1)`]: {
        transform: 'rotate(32deg)',
      },
      [`${open} &:nth-child(2)`]: {
        width: 0,
      },
    }
  },
  rvw.height(4, 3),
  sp({
    maxHeight: '4px',
  }),
])
