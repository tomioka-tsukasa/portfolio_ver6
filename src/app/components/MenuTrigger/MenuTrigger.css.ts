import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const root = style({
  position: 'fixed',
  zIndex: 3,
  transition: 'opacity 0.6s ease-in-out',
  cursor: 'pointer',
  ...rvw.right(32),
  ...rvw.top(24),
})

export const open = style({
  pointerEvents: 'visible',
})

export const triggerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  ...rvw.width(48),
  ...rvw.gap(12),
})

export const triggerLine = style({
  width: '100%',
  height: '4px',
  backgroundColor: colors.text.white_80,

  selectors: {
    ['&:nth-child(1)']: {
      transition: 'all 0.2s ease-in-out 0.1s',
      transformOrigin: 'left bottom',
    },
    ['&:nth-child(2)']: {
      transition: 'all 0.3s ease-out 0s',
    },
    [`${open} &:nth-child(1)`]: {
      transform: 'rotate(32deg)',
    },
    [`${open} &:nth-child(2)`]: {
      width: 0,
    },
  }
})
