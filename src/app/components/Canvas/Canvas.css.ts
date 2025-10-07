import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const root = style({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  pointerEvents: 'none',
  position: 'fixed',
  zIndex: 0,
  top: 0,
  left: 0,
})

export const container = style({
  width: '100vw',
  height: '100vh',
  position: 'relative',
  zIndex: 0,
})

export const canvas = style([
  {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
])

export const mask = style({
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 1,
  transition: 'backdrop-filter 1.5s ease-in-out, background-color 1.5s ease-in-out',
})

export const aboutType = style({
  backdropFilter: 'blur(7px)',
})

export const worksType = style({
  backdropFilter: 'blur(12px)',
  backgroundColor: colors.bg.black_80,
})

export const defaultType = style({
  backdropFilter: 'blur(0px)',
})
