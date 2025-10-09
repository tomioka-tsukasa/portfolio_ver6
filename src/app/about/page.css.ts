import { rvw } from '@/styles/responsive.css'
import { APP_PADDING_TOP } from '../conts'
import { style } from '@vanilla-extract/css'

export const root = style([
  {
    position: 'relative',
  },
])

export const aboutSentence = style([
  rvw.padding([0], [`calc(${APP_PADDING_TOP} - 5vh)`, 0, 0, 0]),
])
