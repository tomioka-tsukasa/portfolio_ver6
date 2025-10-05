import { PageId } from '@/modules/pageChanger/pageChangerTypes'

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
  animationState?: PageId
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
    targetX: 0,
    duration: 2,
    ease: 'power2.inOut',
    animationState: 'home' as const
  },
  menu: {
    targetX: -30,
    duration: 2,
    ease: 'power2.inOut',
    animationState: 'menu' as const
  },
  about: {
    targetX: 22.619601484610477,
    duration: 2,
    ease: 'power2.inOut',
    animationState: 'about' as const
  },
  works: {
    targetX: 0,
    duration: 2,
    ease: 'power2.inOut',
    animationState: 'works' as const
  },
  blog: {
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
      y: 0.21,
      z: 0.28
    }
  },
  about: {
    speed: 0.32,
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
