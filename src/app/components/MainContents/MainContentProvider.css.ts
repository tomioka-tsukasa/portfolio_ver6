import { style } from '@vanilla-extract/css'

export const root = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  opacity: 1,
  pointerEvents: 'visible',
  transition: 'opacity 0.6s ease-in-out',
})

export const unactive = style({
  opacity: 0,
  pointerEvents: 'none',
})
