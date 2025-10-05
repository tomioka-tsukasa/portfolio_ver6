import { MarchingCubesManager } from './modules/marchingCubes/marchingCubesTypes'
import { MetaballGenerator } from './modules/metaballGenerator/metaballGenerator'
import { StatsManager } from './modules/stats/statsTypes'

export type MetaballController = {
  animate: (timestamp: number) => void
  cleanup: () => void
  animateToMenuState: () => void
  animateToHomeState: () => void
  animateToAboutState: () => void
  marchingCubesManager: MarchingCubesManager
  metaballGenerator: MetaballGenerator
  statsManager: StatsManager
  configAnimationTimeline: gsap.core.Timeline | null
  currentAnimatedConfig: { speed: number }
} | null
