import { italiana, playfairDisplay, zenOldMincho } from '@/styles/fontUtils'
import { rvw, sp } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const root = style([
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  rvw.gap(48, 32),
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
  },
  rvw.gap(8, 4),
  rvw.marginTop(16, 12),
])

export const tag = style([
  {
    ...zenOldMincho(),
    color: colors.text.white_60,
    lineHeight: 1,
    wordBreak: 'break-word',
  },
  rvw.fontSize(14, 10),
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
