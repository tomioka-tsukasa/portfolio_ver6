export type PageId = 'home' | 'menu' | 'about' | 'works' | 'blog'

export interface PageTransitionConfig {
  pageId: PageId
  duration?: number
}

export interface CameraWorkConfig {
  position: [number, number, number]
  target: [number, number, number]
  rotation: [number, number, number]
}

export interface MetaballAnimationConfig {
  targetX: number
  duration: number
  ease: string
}
