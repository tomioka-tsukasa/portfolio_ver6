import { style } from '@vanilla-extract/css'
import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'

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
})

export const main = style({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const title = style({
  fontWeight: 'bold',
  color: colors.text.white_80,
  ...rvw.fontSize(64, 24),
})

export const subTitle = style({
  color: colors.text.white_50,
  textAlign: 'center',
  ...rvw.fontSize(18, 10),
})
