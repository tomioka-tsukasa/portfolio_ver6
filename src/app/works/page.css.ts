import { rvw } from '@/styles/responsive.css'
import { APP_PADDING_LEFT, APP_PADDING_TOP } from '../conts'
import { style } from '@vanilla-extract/css'

export const workList = style([
  rvw.padding([120, 0, 144, APP_PADDING_LEFT], [APP_PADDING_TOP, 0, 120, 0]),
])
