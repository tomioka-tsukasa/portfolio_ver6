import { italiana, playfairDisplay, zenOldMincho } from '@/styles/fontUtils'
import { hover, rvw, sp } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const hovered = style({})

export const root = style([
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-out, backdrop-filter 0.3s ease-out, padding-left 0.3s cubic-bezier(0.0, 0.5, 0.3, 1.0)',
  },
  hover({
    backgroundColor: colors.text.white_5,
    backdropFilter: 'blur(32px) brightness(1.06)',
    paddingLeft: '1.2%',
  }),
  rvw.gap(48, 32),
  rvw.padding([64, 32, 64, 0], [64, 24]),
  sp({
    flexDirection: 'column',
  }),
])

export const content = style([
  {
    position: 'relative',
  },
])

export const imageContainer = style([
  {
    flexShrink: '0',
    filter: 'brightness(0.64)',
    transition: 'filter 0.3s ease-out',
    overflow: 'hidden',
    selectors: {
      [`.${hovered} &`]: {
        filter: 'brightness(1)',
      },
    },
  },
  rvw.width(480, '100%'),
])

export const number = style([
  {
    ...italiana(),
    color: colors.text.white_60,
  },
  rvw.fontSize(16, 12),
])

export const title = style([
  {
    ...playfairDisplay(),
    color: colors.text.white,
    lineHeight: 1.28,
    wordBreak: 'break-word',
  },
  rvw.fontSize(48, 32),
])

export const tags = style([
  {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    selectors: {
      '&::before': {
        content: '',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '1px',
        height: '106%',
        backgroundColor: colors.text.white_40,
      },
    }
  },
  rvw.gap(8, 4),
  rvw.marginTop(24, 20),
  rvw.padding([0, 0, 0, 13]),
])

export const tag = style([
  {
    ...zenOldMincho(),
    color: colors.text.white_80,
    lineHeight: 1,
    wordBreak: 'break-word',
  },
  rvw.fontSize(14, 12),
])

export const desc = style([
  {
    ...zenOldMincho(),
    color: colors.text.white_60,
    lineHeight: 1,
    wordBreak: 'break-word',
  },
  rvw.fontSize(12, 10),
  rvw.marginTop(6, 8),
])

export const date = style([
  {
    ...playfairDisplay(),
    color: colors.text.white_80,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  rvw.fontSize(14, 12),
  rvw.marginTop(0, 24),
  sp({
    position: 'relative',
    textAlign: 'right',
  }),
])

// インタラクション

export const fadeIn = style([
  {
    opacity: 0,
    transform: 'translateY(10px)',
    transition: 'opacity 1s cubic-bezier(0.0, 0.5, 0.3, 1.0), transform 1s cubic-bezier(0.0, 0.5, 0.3, 1.0)',
  },
])

export const fadeInImage = style([
  {
    opacity: 0,
    transform: 'translateY(30px)',
    filter: 'grayscale(100%) brightness(0%)',
    transition: 'opacity 0.9s cubic-bezier(0.0, 0.5, 0.3, 1.0), transform 0.9s cubic-bezier(0.0, 0.5, 0.3, 1.0), filter 2s cubic-bezier(0.0, 0.5, 0.3, 1.0)',
  },
])

export const fadeInActive = style([
  {
    opacity: 1,
    transform: 'translateY(0)',
    filter: 'grayscale(0%) brightness(100%)',
  },
])

export const fadeInActiveDelay = (() => {
  const styles: Record<string, string> = {}
  for (let i = 0; i < 10; i++) {
    styles[`${i + 1}`] = style([
      {
        transitionDelay: `${(i + 1) * 0.1}s`,
      },
    ])
  }

  return styles
})()
