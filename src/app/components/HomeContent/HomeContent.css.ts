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
  // pointerEvents: 'none',
})

export const main = style({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const title = style({
  fontWeight: 'bold',
  color: colors.text.white_80,
  letterSpacing: '0.1em',
  ...rvw.fontSize(48, 20),
})

export const subTitle = style({
  color: colors.text.white_60,
  textAlign: 'center',
  ...rvw.fontSize(16, 10),
})
