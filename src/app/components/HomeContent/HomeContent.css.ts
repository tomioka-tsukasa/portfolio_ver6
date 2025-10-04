import { style } from '@vanilla-extract/css'
import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { italiana } from '@/styles/fontUtils'

export const root = style({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  transition: 'opacity 0.6s ease-in-out',
})

export const unactive = style({
  opacity: 0,
  pointerEvents: 'none',
})

export const main = style({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const title = style({
  fontWeight: 'bold',
  color: colors.text.white,
  letterSpacing: '0.06em',
  lineHeight: 1,
  ...italiana(),
  ...rvw.fontSize(64, 32),
})

export const subTitle = style({
  color: colors.text.white_60,
  textAlign: 'center',
  ...rvw.marginLeft(8, 4),
  ...rvw.fontSize(16, 10),
})
