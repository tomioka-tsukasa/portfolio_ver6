import { webglCtrl } from '@/app/webgl/setupMember'
import { cameraAnimation } from '@/app/webgl/animation/cameraAnimation/cameraAnimation'
import { cameraWork } from '@/app/webgl/setup/cameraWork'
import { fixCamerawork } from '@/lib/threejs/fixCamerawork/fixCamerawork'
import { setCurrentPage } from '@/app/store/slice/pageStatus/pageStatus'
import type { AppDispatch } from '@/app/store/makeStore'
import gsap from 'gsap'
import type { PageId, PageTransitionConfig, CameraWorkConfig, MetaballAnimationConfig } from './pageChangerTypes'

interface PageChanger {
  (config: PageTransitionConfig): void
}

// ページごとのカメラワーク設定
const pageConfigs: Record<PageId, {
  cameraWork: CameraWorkConfig
  metaballAnimation: MetaballAnimationConfig
  metaballState?: 'home' | 'menu'
}> = {
  home: {
    cameraWork: cameraWork.default,
    metaballAnimation: {
      targetX: 0,
      duration: 2,
      ease: 'power2.inOut'
    },
    metaballState: 'home'
  },
  menu: {
    cameraWork: cameraWork.menu,
    metaballAnimation: {
      targetX: -30,
      duration: 2,
      ease: 'power2.inOut'
    },
    metaballState: 'menu'
  },
  about: {
    cameraWork: cameraWork.default, // TODO: aboutページ用のカメラワークを定義
    metaballAnimation: {
      targetX: 0,
      duration: 2,
      ease: 'power2.inOut'
    }
  },
  works: {
    cameraWork: cameraWork.default, // TODO: worksページ用のカメラワークを定義
    metaballAnimation: {
      targetX: 0,
      duration: 2,
      ease: 'power2.inOut'
    }
  },
  blog: {
    cameraWork: cameraWork.default, // TODO: blogページ用のカメラワークを定義
    metaballAnimation: {
      targetX: 0,
      duration: 2,
      ease: 'power2.inOut'
    }
  }
}

export const pageChanger: PageChanger = ({ pageId, duration = 2000 }) => {
  const config = pageConfigs[pageId]

  if (!config) {
    console.warn(`Page config not found for pageId: ${pageId}`)

    return
  }

  // カメラワークの準備
  const targetCameraWork = fixCamerawork(
    config.cameraWork.position,
    config.cameraWork.target,
    config.cameraWork.rotation
  )

  // メタボールアニメーション（メニューまたはホーム状態）
  if (config.metaballState === 'menu') {
    webglCtrl.metaballController?.animateToMenuState(duration / 1000)
  } else if (config.metaballState === 'home') {
    webglCtrl.metaballController?.animateToHomeState(duration / 1000)
  }

  // カメラアニメーション
  cameraAnimation(
    targetCameraWork.positionVector,
    targetCameraWork.targetVector,
    duration
  )

  // メタボール位置のアニメーション
  if (webglCtrl.metaballController?.marchingCubesManager.marchingCubes) {
    const currentPos = webglCtrl.metaballController.marchingCubesManager.marchingCubes.position

    console.log(`Transitioning to ${pageId}: 現在位置`, currentPos.x, currentPos.y, currentPos.z)

    gsap.to(currentPos, {
      x: config.metaballAnimation.targetX,
      y: currentPos.y,
      z: currentPos.z,
      duration: config.metaballAnimation.duration,
      ease: config.metaballAnimation.ease,
      onComplete: () => {
        console.log(`Transition to ${pageId} complete: 完了後位置`, currentPos.x, currentPos.y, currentPos.z)
      }
    })
  }
}

// Redux dispatchを受け取るバージョン
export const createPageChanger = (dispatch: AppDispatch) => {
  return ({ pageId, duration = 2000 }: PageTransitionConfig) => {
    pageChanger({ pageId, duration })
    dispatch(setCurrentPage(pageId))
  }
}
