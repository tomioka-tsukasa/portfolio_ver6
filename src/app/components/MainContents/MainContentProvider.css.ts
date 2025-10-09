import { style } from '@vanilla-extract/css'

export const root = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  opacity: 1,
  pointerEvents: 'visible',
  transition: 'opacity 0.5s cubic-bezier(0.0, 0.5, 0.3, 1.0)',
  scrollbarWidth: 'none', // Firefox
  msOverflowStyle: 'none', // IE and Edge
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none', // Chrome, Safari, Opera
    },
  },
})

export const unactive = style({
  opacity: 0,
  pointerEvents: 'none',
})

export const transitioning = style({
  opacity: 0,
  pointerEvents: 'none',
})
