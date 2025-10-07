import { italiana } from '@/styles/fontUtils'
import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const root = style([
  {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 3,
  },
  rvw.top(32, 24),
  rvw.left(24, 12),
])

export const title = style([
  {
    color: colors.text.white,
    lineHeight: 1,
    letterSpacing: '0.06em',
    ...italiana(),
  },
  rvw.fontSize(64, 48),
])
