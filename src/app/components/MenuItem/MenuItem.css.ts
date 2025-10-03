import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { playfairDisplay } from '@/styles/fontUtils'
import { style } from '@vanilla-extract/css'

export const root = style({
  display: 'flex',
  gap: '24px',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',
  cursor: 'pointer'
})

export const textWrapper = style({
  position: 'relative',
})

export const text = style({
  ...playfairDisplay(),
  position: 'relative',
  fontSize: '48px',
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
  alignItems: 'start',
  justifyContent: 'end',
  height: '48px',
  flexGrow: 1,
  paddingBottom: '14px',
  position: 'relative',
  width: '100%',
})

export const border = style({
  backgroundColor: colors.text.white_30,
  height: '1px',
  width: '100%',
  flexShrink: 0
})
