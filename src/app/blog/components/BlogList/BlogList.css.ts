import { rvw } from '@/styles/responsive.css'
import { style } from '@vanilla-extract/css'

export const root = style([
  {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5%',
  },
  rvw.rowGap(32, 24),
])

export const blogItem = style([
  rvw.width('47.5%', '100%'),
])
