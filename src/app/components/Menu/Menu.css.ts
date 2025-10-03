import { style } from '@vanilla-extract/css'

export const root = style({
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: 100,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  pointerEvents: 'none',
  opacity: 0,
  transition: 'opacity 0.6s ease-in-out',
})

export const active = style({
  opacity: 1,
  pointerEvents: 'visible',
})

export const container = style({
  position: 'relative',
  width: '50%',
  height: '100%',
})

export const menuContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative',
  top: '50%',
  left: '16%',
  transform: 'translateY(-50%)',
  width: '72%',
  pointerEvents: 'visible',
})
