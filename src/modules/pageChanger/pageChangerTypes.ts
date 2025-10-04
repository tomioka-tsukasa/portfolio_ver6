import { CameraWorkMember } from '@/app/webgl/setup/cameraWork'

export type PageId = 'home' | 'menu' | 'about' | 'works' | 'blog'

export interface PageTransitionConfig {
  pageId: PageId
  duration?: number
}

export type CameraWorkConfig = CameraWorkMember

export interface MetaballAnimationConfig {
  targetX: number
  duration: number
  ease: string
}
