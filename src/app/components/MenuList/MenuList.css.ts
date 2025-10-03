import { rvw } from '@/styles/responsive.css'
import { style } from '@vanilla-extract/css'

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  position: 'relative',
  ...rvw.gap(32),
})

export const menuItemWrapper = style({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  flexShrink: 0,
  width: '100%',
  ...rvw.gap(24),
})
