import { CameraWorkMember } from '@/app/webgl/cameraWork'

export type PageStatus = 'home' | 'menu' | 'about' | 'works' | 'blog'

export interface PageTransitionConfig {
  pageId: PageStatus | 'back'
  duration?: number
}

export type CameraWorkConfig = CameraWorkMember

export interface MetaballAnimationConfig {
  targetX: number
  duration: number
  ease: string
}
