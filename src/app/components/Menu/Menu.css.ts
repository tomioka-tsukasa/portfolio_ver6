import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const root = style({
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: 2,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  pointerEvents: 'none',
  opacity: 0,
  backgroundColor: colors.bg.black_30,
  transition: 'opacity 0.6s ease-in-out',
})

export const active = style({
  opacity: 1,
  pointerEvents: 'visible',
})

export const container = style([
  {
    position: 'relative',
    height: '100%',
  },
  rvw.width('50%', '100%'),
])

export const menuContent = style([
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'absolute',
  },
  rvw.width('72%', '90%'),
  rvw.left('16%', '5%'),
  rvw.top('46%', 'unset'),
  rvw.bottom('unset', '20vh'),
  rvw.transform('translateY(-50%)', 'translateY(0)'),
])
