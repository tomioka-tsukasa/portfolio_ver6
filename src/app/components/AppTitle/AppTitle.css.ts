import { rvw, sp } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { italiana } from '@/styles/fontUtils'
import { style } from '@vanilla-extract/css'

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const title = style([
  {
    color: colors.text.white_60,
    fontWeight: 'bold',
    lineHeight: 1,
    letterSpacing: '0.06em',
    ...italiana(),
  },
  rvw.fontSize(20, '16px'),
  sp({
    textAlign: 'right',
  }),
])

export const subTitle = style([
  {
    color: colors.text.white_40,
  },
  rvw.fontSize(10, '8px'),
])
