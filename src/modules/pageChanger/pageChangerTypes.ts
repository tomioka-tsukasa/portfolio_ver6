import { CameraWorkMember } from '@/app/webgl/cameraWork'

export type PageId = 'home' | 'menu' | 'about' | 'works' | 'blog'

export interface PageTransitionConfig {
  pageId: PageId | 'back'
  duration?: number
}

export type CameraWorkConfig = CameraWorkMember

export interface MetaballAnimationConfig {
  targetX: number
  duration: number
  ease: string
}
