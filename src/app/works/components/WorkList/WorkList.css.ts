import { hover, rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { style } from '@vanilla-extract/css'

export const root = style([
  {
    position: 'relative',
  },
])

export const workItem = style([
  {
    borderBottom: `1px solid ${colors.text.white_20}`,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-out, backdrop-filter 0.3s ease-out, padding-left 0.3s cubic-bezier(0.0, 0.5, 0.3, 1.0)',
  },
  hover({
    backgroundColor: colors.text.white_5,
    backdropFilter: 'blur(32px) brightness(1.06)',
    paddingLeft: '1.2%',
  }),
  rvw.padding([64, 32, 64, 0], [64, 24]),
  rvw.borderBottomWidth(1, 1),
])
