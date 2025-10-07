import { hover, rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/variables'
import { playfairDisplay } from '@/styles/fontUtils'
import { style } from '@vanilla-extract/css'

export const root = style([
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    backgroundColor: colors.text.white_5,
    backdropFilter: 'blur(32px) brightness(1.06)',
    border: `1px solid ${colors.text.white_10}`,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-out, backdrop-filter 0.3s ease-out',
  },
  hover({
    backgroundColor: colors.text.white_20,
    backdropFilter: 'blur(32px) brightness(1.06)',
  }),
  rvw.padding([16, 64], [12, 48]),
  rvw.borderRadius(32, 24),
  rvw.borderWidth(1),
])

export const text = style([
  {
    ...playfairDisplay(),
    color: colors.text.white,
    lineHeight: 1.28,
    wordBreak: 'break-word',
  },
  rvw.fontSize(16, 14),
])
