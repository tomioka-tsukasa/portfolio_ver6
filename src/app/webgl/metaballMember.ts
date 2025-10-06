import { PageStatus } from '@/app/store/slice/pageStatus/pageStatusTypes'

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
    numBlobs: 6,
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
    numBlobs: 3,
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
    numBlobs: 5,
    speed: 0.25,
    strength: 1.8,
    subtract: 9,
    enableColors: true,
    showFloor: true,
    targetX: 0,
    duration: 2,
    ease: 'power2.inOut',
    animationState: 'works' as const
  },
  blog: {
    numBlobs: 4,
    speed: 0.2,
    strength: 1.6,
    subtract: 10,
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
      x: 0.15,
      y: 0.01,
      z: 0.18
    }
  },
  menu: {
    speed: 0.6,
    amplitude: {
      x: 0.25,
      y: 0.25,
      z: 0.28
    }
  },
  about: {
    speed: 0.15,
    amplitude: {
      x: 0.15,
      y: 0.15,
      z: 0.12
    }
  },
  works: {
    speed: 0.2,
    amplitude: {
      x: 0.15,
      y: 0.01,
      z: 0.18
    }
  },
  blog: {
    speed: 0.2,
    amplitude: {
      x: 0.15,
      y: 0.01,
      z: 0.18
    }
  }
} as const

export type MetaballConfigKey = keyof typeof metaballConfigs
