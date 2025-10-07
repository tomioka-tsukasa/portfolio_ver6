import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const root = style([
  {
    position: 'relative',
  },
  rvw.padding([120, 0, 144, 289], [64, 0, 120, 0]),
])

export const workItem = style([
  {
    borderBottom: `1px solid ${colors.text.white_20}`,
  },
  rvw.padding([64, 32, 64, 0], [64, 24]),
  rvw.borderBottomWidth(1, 1),
])
