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
