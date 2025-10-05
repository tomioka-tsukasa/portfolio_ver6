import { style } from '@vanilla-extract/css'

export const root = style([
  {
    width: '100%',
    height: '100vh',
    display: 'flex',
    // pointerEvents: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 0,
  },
])
