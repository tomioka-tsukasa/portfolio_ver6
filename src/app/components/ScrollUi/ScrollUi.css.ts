import { hover, rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { style, keyframes } from '@vanilla-extract/css'
import { playfairDisplay } from '@/styles/fontUtils'

const lineAnimation = keyframes({
  '0%': {
    height: rvw.height(160).height,
    bottom: '100%',
  },
  '80%': {
    height: '0%',
    bottom: '-100%',
  },
  '100%': {
    height: '0%',
    bottom: '-100%',
  },
})

const markerOuterAnimation = keyframes({
  '5%': {
    width: '10%',
    height: '10%',
    opacity: 0,
  },
  '6%': {
    width: '10%',
    height: '10%',
    opacity: 1,
  },
  '50%': {
    width: '100%',
    height: '100%',
    opacity: 0,
  },
  '100%': {
    width: '100%',
    height: '100%',
    opacity: 0,
  },
})

export const root = style([
  {
    position: 'fixed',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  rvw.bottom('15%', '12%'),
  rvw.height(160),
])

export const container = style({
  position: 'relative',
  width: '100%',
  height: '100%',
})

export const text = style([
  {
    color: colors.text.white,
    backgroundColor: colors.bg.black_30,
    backdropFilter: 'blur(12px)',
    textAlign: 'center',
    textWrap: 'nowrap',
    border: `1px solid ${colors.text.white_10}`,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out, border-color 0.3s ease-in-out',
    ...playfairDisplay(),
  },
  hover({
    backgroundColor: colors.bg.black_50,
    backdropFilter: 'blur(24px)',
    borderColor: colors.text.white_20,
  }),
  rvw.fontSize(14, 12),
  rvw.padding([5, 32, 6]),
  rvw.borderRadius(24, 24),
])

export const lineContainer = style([
  {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '1px',
    overflow: 'hidden',
  },
  rvw.height(160, 70),
])

export const line = style([
  {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: '100%',
    backgroundColor: colors.text.white_50,
    animation: `${lineAnimation} 2.4s ease-in-out infinite`,
  },
  rvw.height(110, 70),
])

export const markerContainer = style([
  {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  rvw.width(120, 90),
  rvw.height(120, 90),
  rvw.bottom(-60, -45),
])

export const markerInner = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const markerItemOuter = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '50%',
  width: '10%',
  height: '10%',
  opacity: 0,
  border: `1px solid ${colors.text.white}`,
  animation: `${markerOuterAnimation} 2.4s ease-in-out 0s infinite`,
  willChange: 'opacity, width, height',
  backfaceVisibility: 'hidden',
})

export const markerItem = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) rotate(45deg)',
  width: '12%',
  height: '12%',
  backgroundColor: colors.text.white_80,
})
