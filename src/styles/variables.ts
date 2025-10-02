export {
  PcDesignWidth,
  PcDesignHeight,
  TabletDesignWidth,
  SpDesignWidth,
  PcMqWidthMin,
  PcMqWidthMax,
  PcOverMqWidthMin,
  TabletMqWidthMin,
  SpMqWidth,
  usePixelLimit,
  pixelLimitWidth,
} from './responsive.config'

/**
 * カラー定義
 */

export const colors = {
  main: {
  },
  base: {
    white: '#ffffff',
    black: '#000000',
    gray: '#d7d7d7',
    bg: '#ffffff',
  },
  sub: {
  },
  text: {
    white: '#ffffff',
    white_90: 'rgba(255, 255, 255, 0.9)',
    white_80: 'rgba(255, 255, 255, 0.8)',
    white_70: 'rgba(255, 255, 255, 0.7)',
    white_60: 'rgba(255, 255, 255, 0.6)',
    white_50: 'rgba(255, 255, 255, 0.5)',
    white_40: 'rgba(255, 255, 255, 0.4)',
    white_30: 'rgba(255, 255, 255, 0.3)',
    white_20: 'rgba(255, 255, 255, 0.2)',
    white_10: 'rgba(255, 255, 255, 0.1)',
    white_5: 'rgba(255, 255, 255, 0.05)',
  },
}

/**
 * フォント定義
 */

export { basicFontStyle, zenOldMinchoStyle, playfairDisplayStyle, type SetFontFamily } from './fontUtils'
