import { style } from '@vanilla-extract/css'
import { colors } from '@/styles/variables'
import { hover, rvw } from '@/styles/responsive.css'
import { zenOldMincho } from '@/styles/fontUtils'

export const body = style([
  {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1.78,
    ...zenOldMincho(),
  },
  rvw.gap(48, 32),
  rvw.fontSize(15, 12.5),
])

export const link = style([
  {
    color: colors.text.white_80,
    display: 'inline',
    padding: '0 0 1px 0',
    textDecoration: 'none',
    backgroundImage: `linear-gradient(
      to bottom,
      currentColor 0%,
      currentColor 100%
    )`,
    backgroundPosition: 'left bottom',
    backgroundSize: '100% 1px',
    backgroundRepeat: 'no-repeat',
    transition: 'background-size 0.2s ease-out, opacity 0.2s ease-out',
  },
  hover({
    backgroundSize: '0 1px',
    opacity: 0.7,
  }),
])

export const list = style([
  {
    display: 'flex',
    flexDirection: 'column',
  },
  rvw.gap(9),
])

export const listItem = style([
  {
    paddingLeft: '0.875em',
    position: 'relative',
    selectors: {
      '&::before': {
        content: '""',
        display: 'block',
        width: '0.3em',
        height: '0.3em',
        backgroundColor: colors.text.white,
        borderRadius: '50%',
        position: 'absolute',
        top: 'calc((1lh - 0.3em) / 2)',
        left: '0',
      },
    }
  },
])
