import { hover, rvw, sp } from '@/styles/responsive.css'
import { style } from '@vanilla-extract/css'
import { APP_PADDING_LEFT, APP_PADDING_TOP } from '@/app/conts'
import { colors } from '@/styles/variables'
import { italiana, playfairDisplay, zenOldMincho } from '@/styles/fontUtils'

export const root = style({
  width: '100%',
  height: '100%',
})

export const container = style([
  rvw.padding([140, 64, 144, APP_PADDING_LEFT], [APP_PADDING_TOP, 0, 120]),
])

export const thumbnail = style([
  {
    width: '100%',
    position: 'relative',
    border: `1px solid ${colors.text.white_10}`,
  },
  rvw.padding([16], [0]),
  rvw.borderWidth(1),
  sp({
    border: 'none',
  }),
])

export const content = style([
  {
    width: '100%',
  },
  rvw.padding([32, 0, 0], [24, 24, 0]),
])

export const title = style([
  {
    ...playfairDisplay(),
    color: colors.text.white,
    lineHeight: 1.28,
    wordBreak: 'break-word',
  },
  rvw.fontSize(64, 32),
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

export const info = style([
  {
    display: 'flex',
    flexDirection: 'column',
    borderLeft: `1px solid ${colors.text.white_30}`,
  },
  rvw.borderWidth(1),
  rvw.padding([9, 0, 9, 32], [9, 0, 9, 16]),
  rvw.marginTop(24, 16),
])

export const pageUrl = style([
  {
    display: 'flex',
  },
  rvw.gap(16, 9),
])

export const pageUrlLabel = style([
  {
    ...italiana(),
    color: colors.text.white,
    lineHeight: 1.28,
    wordBreak: 'break-word',
  },
  rvw.fontSize(16, 12),
])

export const pageUrlValue = style([
  {
    ...playfairDisplay(),
    color: colors.text.white,
    lineHeight: 1.28,
    wordBreak: 'break-word',
    paddingTop: 'calc((1lh - 1em) / 2)',

    // underline
    display: 'inline',
    padding: '0 0 1px 0',
    textDecoration: 'none',
    backgroundImage: `linear-gradient(
      to bottom,
      currentColor 0%,
      currentColor 100%
    )`,
    backgroundPosition: 'left bottom',
    backgroundSize: '0 1px',
    backgroundRepeat: 'no-repeat',
    transition: 'background-size 0.2s ease-out, opacity 0.2s ease-out',
  },
  rvw.fontSize(12, 10),
  hover({
    backgroundSize: '100% 1px',
    opacity: 0.7,
  }),
])

export const body = style([
  rvw.marginTop(96, 80),
])

export const backListPage = style([
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  rvw.marginTop(120, 80),
])
