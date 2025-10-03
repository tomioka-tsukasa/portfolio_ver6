import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const root = style({
  position: 'fixed',
  left: '50%',
  bottom: '0',
  transform: 'translateX(-50%)',
  ...rvw.height(150, 100),
})

export const container = style({
  position: 'relative',
  width: '100%',
  height: '100%',
})

export const text = style({
  color: colors.text.white,
  ...rvw.fontSize(20, 10),
})

export const line = style({
  position: 'absolute',
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '1px',
  backgroundColor: colors.text.white_50,
  ...rvw.height(110, 100),
})

export const markerContainer = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  ...rvw.width(80, 60),
  ...rvw.height(80, 60),
  ...rvw.bottom(-40, 60),
})

export const markerInner = style({
  position: 'relative',
  width: '100%',
  height: '100%',
})

export const markerItemOuter = style({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  border: `1px solid ${colors.text.white_60}`,
})

export const markerItem = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '24%',
  height: '24%',
  borderRadius: '50%',
  backgroundColor: colors.text.white_80,
})
