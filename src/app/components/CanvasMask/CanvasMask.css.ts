import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const root = style({
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  transition: 'backdrop-filter 1.5s ease-in-out, background-color 1.5s ease-in-out',
})

export const aboutType = style({
  backdropFilter: 'blur(7px)',
  backgroundColor: colors.bg.black_40,
})

export const worksType = style({
  backdropFilter: 'blur(12px)',
  backgroundColor: colors.bg.black_80,
})

export const blogType = style({
  backdropFilter: 'blur(12px)',
  backgroundColor: colors.bg.black_70,
})

export const defaultType = style({
  backdropFilter: 'blur(0px)',
})
