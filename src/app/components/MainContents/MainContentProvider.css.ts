import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const root = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  opacity: 1,
  pointerEvents: 'none',
  transition: 'opacity 0.6s ease-in-out, backdrop-filter 1.5s ease-in-out, background-color 1.5s ease-in-out',
})

export const unactive = style({
  opacity: 0,
  pointerEvents: 'none',
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
