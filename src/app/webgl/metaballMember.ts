import { PageStatus } from '@/app/store/slice/pageStatus/pageStatusTypes'

// カラーパターンの数値マッピング
export const COLOR_PATTERN_VALUES = {
  white: 0.0,
  blue: 1.0,
  yellow: 2.0,
  red: 3.0,
} as const

export type ColorPatternKey = keyof typeof COLOR_PATTERN_VALUES

export interface MetaballConfig {
  numBlobs: number
  speed: number
  strength: number
  subtract: number
  enableColors: boolean
  showFloor: boolean
  targetX: number
  duration: number
  ease: string
  animationState?: PageStatus
}

export interface MetaballAnimationConfig {
  speed: number
  amplitude: {
    x: number
    y: number
    z: number
  }
  colorPattern: ColorPatternKey
}

export const metaballConfigs = {
  home: {
    numBlobs: 4,
    speed: 0.2,
    strength: 1.6,
    subtract: 10,
    enableColors: true,
    showFloor: false,
    targetX: 0,
    duration: 2,
    ease: 'power2.inOut',
    animationState: 'home' as const
  },
  menu: {
    numBlobs: 4,
    speed: 0.6,
    strength: 2.0,
    subtract: 8,
    enableColors: true,
    showFloor: false,
    targetX: 0,
    duration: 2,
    ease: 'power2.inOut',
    animationState: 'menu' as const
  },
  about: {
    numBlobs: 4,
    speed: 0.15,
    strength: 1.2,
    subtract: 12,
    enableColors: true,
    showFloor: false,
    targetX: 0,
    duration: 2,
    ease: 'power2.inOut',
    animationState: 'about' as const
  },
  works: {
    numBlobs: 4,
    speed: 0.15,
    strength: 6,
    subtract: 2,
    enableColors: true,
    showFloor: false,
    targetX: 0,
    duration: 2,
    ease: 'power2.inOut',
    animationState: 'works' as const
  },
  blog: {
    numBlobs: 4,
    speed: 0.1,
    strength: 6,
    subtract: 2,
    enableColors: true,
    showFloor: false,
    targetX: 0,
    duration: 2,
    ease: 'power2.inOut',
    animationState: 'blog' as const
  }
} as const

// メタボールアニメーション設定
export const metaballAnimationConfigs = {
  home: {
    speed: 0.2,
    amplitude: {
      x: 0.13,
      y: 0.01,
      z: 0.15
    },
    colorPattern: 'blue'
  },
  menu: {
    speed: 0.6,
    amplitude: {
      x: 0.25,
      y: 0.25,
      z: 0.28
    },
    colorPattern: 'white'
  },
  about: {
    speed: 0.15,
    amplitude: {
      x: 0.14,
      y: 0.15,
      z: 0.12
    },
    colorPattern: 'blue'
  },
  works: {
    speed: 0.15,
    amplitude: {
      x: 0.50,
      y: 0.05,
      z: 0.53
      // x: 0.62,
      // y: 0.12,
      // z: 0.65
    },
    colorPattern: 'blue'
  },
  blog: {
    speed: 0.1,
    amplitude: {
      x: 0.50,
      y: 0.05,
      z: 0.53
    },
    colorPattern: 'blue'
  }
} as const

export type MetaballConfigKey = keyof typeof metaballConfigs
