import { italiana, playfairDisplay, zenOldMincho } from '@/styles/fontUtils'
import { hover, rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const root = style([
  {
    width: '100%',
    // display: 'flex',
    // alignItems: 'center',
    backdropFilter: 'blur(32px) brightness(1)',
    backgroundColor: colors.text.white_10,
    transition: 'backdrop-filter 0.3s ease-in-out, background-color 0.3s ease-in-out',
    cursor: 'pointer',
  },
  hover({
    backdropFilter: 'blur(32px) brightness(1.3)',
    backgroundColor: colors.text.white_20,
  }),
  rvw.gap(16),
  rvw.borderRadius(6),
  rvw.padding([24, 22, 14, 24], [16, 16, 10]),
])

export const titleContainer = style([
  {
    width: '100%',
    display: 'flex',
  },
  rvw.gap(20),
])

export const iconContainer = style([
  {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.text.white_90,
    height: 'min-content',
    lineHeight: '1',
  },
  rvw.padding([14, 14, 16], [10, 12, 12]),
  rvw.fontSize(38, 20),
  rvw.borderRadius(3),
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
    ...zenOldMincho(),
    color: colors.text.white,
    lineHeight: 1.4,
    wordBreak: 'break-word',
  },
  rvw.fontSize(18, 14),
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
    lineHeight: 1.2,
    wordBreak: 'break-word',
  },
  rvw.fontSize(14, 10),
])

export const desc = style([
  {
    ...zenOldMincho(),
    color: colors.text.white_60,
    lineHeight: 1.5,
    wordBreak: 'break-word',
  },
  rvw.fontSize(12, 10),
  rvw.marginTop(20, 16),
])

export const date = style([
  {
    ...playfairDisplay(),
    color: colors.text.white_80,
    position: 'relative',
    textAlign: 'right',
  },
  rvw.fontSize(14, 12),
  rvw.marginTop(0, 6),
])
