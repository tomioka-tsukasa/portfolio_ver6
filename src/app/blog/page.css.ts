import { rvw } from '@/styles/responsive.css'
import { APP_PADDING_LEFT } from '../conts'
import { style } from '@vanilla-extract/css'

export const root = style([
  {
    position: 'relative',
  },
  rvw.padding([120, 96, 144, APP_PADDING_LEFT], [64, 32, 120]),
])

export const blogList = style([
  rvw.marginTop(120, 80),
])
