import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { playfairDisplay } from '@/styles/fontUtils'
import { style } from '@vanilla-extract/css'

export const root = style({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  ...rvw.gap(24, 18),
})

export const textWrapper = style({
  position: 'relative',
})

export const text = style({
  ...playfairDisplay(),
  position: 'relative',
  color: colors.text.white,
  whiteSpace: 'nowrap',
  ...rvw.fontSize(48, 20),
})

export const textCurrent = style({
  color: colors.text.white_30,
  pointerEvents: 'none',
})

export const textStrikethrough = style({
  backgroundColor: colors.text.white_30,
  height: '1px',
  position: 'absolute',
  top: '55%',
  left: 0,
  zIndex: 1,
  width: '100%',
})

export const borderWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  flexGrow: 1,
  position: 'relative',
  width: '100%',
  ...rvw.height(48, 32),
  ...rvw.paddingBottom(14, 6),
})

export const border = style({
  backgroundColor: colors.text.white_30,
  height: '1px',
  width: '100%',
  flexShrink: 0
})
