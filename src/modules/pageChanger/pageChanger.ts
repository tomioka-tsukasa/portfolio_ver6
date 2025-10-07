import { webglCtrl } from '@/app/webgl/setupMember'
import { cameraAnimation } from '@/app/webgl/animation/cameraAnimation/cameraAnimation'
import { animateMetaballColor } from '@/app/webgl/animation/metaballColorAnimation/metaballColorAnimation'
import { cameraWork } from '@/app/webgl/cameraWork'
import { metaballConfigs, metaballAnimationConfigs } from '@/app/webgl/metaballMember'
import { fixCamerawork } from '@/lib/threejs/fixCamerawork/fixCamerawork'
import { setCurrentStatus } from '@/app/store/slice/pageStatus/pageStatus'
import type { AppDispatch } from '@/app/store/makeStore'
import gsap from 'gsap'
import type { PageStatus } from '@/app/store/slice/pageStatus/pageStatusTypes'
import type { PageTransitionConfig } from '@/modules/pageChanger/pageChangerTypes'

// ページ履歴管理 - 動的に初期化
const pageHistory: PageStatus[] = []

// 初期化フラグ
let isPageHistoryInitialized = false

// ページ履歴を初期化する関数
const initializePageHistory = () => {
  if (!isPageHistoryInitialized && webglCtrl.pageId && webglCtrl.pageId !== 'home') {
    pageHistory.length = 0
    pageHistory.push(webglCtrl.pageId as PageStatus)
    isPageHistoryInitialized = true
    console.log('📚 PageHistory initialized with:', webglCtrl.pageId)
  } else if (pageHistory.length === 0) {
    pageHistory.push('home')
    isPageHistoryInitialized = true
    console.log('📚 PageHistory initialized with default: home')
  }
}
import { MetaballController } from '@/app/webgl/metaball/metaballTypes'

interface PageChanger {
  (config: PageTransitionConfig): void
}

// ページごとの設定を動的に取得する関数
const getPageConfig = (pageId: PageStatus) => {
  const cameraConfig = cameraWork[pageId] || cameraWork.default
  const metaballConfig = metaballConfigs[pageId] || metaballConfigs.home
  const metaballAnimationConfig = metaballAnimationConfigs[pageId] || metaballAnimationConfigs.home

  return {
    cameraWork: cameraConfig,
    metaballAnimation: metaballConfig,
    metaballAnimationSettings: metaballAnimationConfig
  }
}

export const pageChanger: PageChanger = ({ pageId, duration = 2000 }) => {
  // ページ履歴を初期化（初回のみ）
  initializePageHistory()

  console.log(`🔄 PageChanger called with pageId: ${pageId}`)
  console.log('📚 Current pageHistory:', [...pageHistory])

  // 'back'が指定された場合は前のページに戻る
  let targetPageId: PageStatus

  if (pageId === 'back') {
    if (pageHistory.length > 1) {
      // 現在のページを履歴から削除
      pageHistory.pop()
      // 前のページを取得
      targetPageId = pageHistory[pageHistory.length - 1]
      console.log(`⬅️ Going back to: ${targetPageId}`)
    } else {
      // 履歴がない場合はhomeに戻る
      targetPageId = 'home'
      console.log('🏠 No history, going to home')
    }
  } else {
    targetPageId = pageId as PageStatus
    // 新しいページを履歴に追加（同じページの連続は追加しない）
    if (pageHistory[pageHistory.length - 1] !== targetPageId) {
      pageHistory.push(targetPageId)
      console.log(`➕ Added to history: ${targetPageId}`)
      // 履歴の長さを制限（最大10ページ）
      if (pageHistory.length > 10) {
        pageHistory.shift()
      }
    } else {
      console.log(`🔄 Same page, not adding to history: ${targetPageId}`)
    }
  }

  console.log('📚 Updated pageHistory:', [...pageHistory])
  console.log(`🎯 Target page: ${targetPageId}`)
  console.log('----------------------------------------')

  const config = getPageConfig(targetPageId)

  // カメラワークの準備
  const targetCameraWork = fixCamerawork(
    config.cameraWork.position,
    config.cameraWork.target,
    config.cameraWork.rotation
  )

  // カメラアニメーション
  cameraAnimation(
    targetCameraWork.positionVector,
    targetCameraWork.targetVector,
    duration
  )

  // メタボール設定の即座更新（真偽値のみ）
  if (webglCtrl.metaballController?.metaballGenerator) {
    console.log(`Updating metaball config for ${pageId}:`, config.metaballAnimation)
    webglCtrl.metaballController.metaballGenerator.updateConfig({
      enableColors: config.metaballAnimation.enableColors,
      showFloor: config.metaballAnimation.showFloor
    })
  }

  // メタボール個数更新（カメラ移動が少し落ち着いてから）
  setTimeout(() => {
    if (webglCtrl.metaballController?.metaballGenerator) {
      webglCtrl.metaballController.metaballGenerator.updateConfig({
        numBlobs: config.metaballAnimation.numBlobs,
      })
    }
  }, duration / 1.2)

  // メタボールのアニメーション設定更新（滑らかに変化）
  if (webglCtrl.metaballController) {
    const controller = webglCtrl.metaballController as MetaballController

    if (!controller) {
      console.log('メタボールコントローラーが存在しません')

      return
    }

    // 既存のアニメーションを停止
    if (controller.configAnimationTimeline) {
      controller.configAnimationTimeline.kill()
    }

    // 新しいタイムラインを作成
    const configAnimationTimeline = gsap.timeline()

    // speed を滑らかにアニメーション
    if (controller?.currentAnimatedConfig) {
      configAnimationTimeline.to(controller.currentAnimatedConfig, {
        speed: config.metaballAnimationSettings.speed,
        duration: duration / 1000,
        ease: 'power2.inOut',
        onComplete: () => {
          controller.configAnimationTimeline = null
        }
      })
    }

    // strength と subtract を滑らかにアニメーション
    if (controller.metaballGenerator) {
      const currentConfig = controller.metaballGenerator.getConfig()
      const animationConfig = {
        strength: currentConfig.strength,
        subtract: currentConfig.subtract
      }

      configAnimationTimeline.to(animationConfig, {
        strength: config.metaballAnimation.strength,
        subtract: config.metaballAnimation.subtract,
        duration: duration / 1000,
        ease: 'power2.inOut',
        onUpdate: () => {
          controller.metaballGenerator?.updateConfig({
            strength: animationConfig.strength,
            subtract: animationConfig.subtract
          })
        }
      }, 0)
    }

    // 振幅を滑らかにアニメーション
    if (controller.metaballGenerator && typeof controller.metaballGenerator.animateAmplitude === 'function') {
      controller.metaballGenerator.animateAmplitude({
        amplitudeX: config.metaballAnimationSettings.amplitude.x,
        amplitudeY: config.metaballAnimationSettings.amplitude.y,
        amplitudeZ: config.metaballAnimationSettings.amplitude.z,
      }, duration / 1000)
    }

    // uColorPattern を滑らかにアニメーション（共通化した関数を使用）
    animateMetaballColor(
      config.metaballAnimationSettings.colorPattern,
      duration / 1000,
      'power2.inOut'
    )

    // タイムラインを保存
    controller.configAnimationTimeline = configAnimationTimeline
  }

  // メタボール位置のアニメーション
  // if (webglCtrl.metaballController?.marchingCubesManager.marchingCubes) {
  //   const currentPos = webglCtrl.metaballController.marchingCubesManager.marchingCubes.position

  //   console.log(`Transitioning to ${pageId}: 現在位置`, currentPos.x, currentPos.y, currentPos.z)

  //   gsap.to(currentPos, {
  //     x: config.metaballAnimation.targetX,
  //     y: currentPos.y,
  //     z: currentPos.z,
  //     duration: config.metaballAnimation.duration,
  //     ease: config.metaballAnimation.ease,
  //     onComplete: () => {
  //       console.log(`Transition to ${pageId} complete: 完了後位置`, currentPos.x, currentPos.y, currentPos.z)
  //     }
  //   })
  // }
}

// Redux dispatchを受け取るバージョン
export const createPageChanger = (dispatch: AppDispatch) => {
  return ({ pageId, duration = 2000 }: PageTransitionConfig) => {
    // 'back'の場合は実際の遷移先ページIDを取得してReduxに設定
    let targetPageId: PageStatus

    if (pageId === 'back') {
      if (pageHistory.length > 1) {
        targetPageId = pageHistory[pageHistory.length - 2] // pop前の前のページ
      } else {
        targetPageId = 'home'
      }
    } else {
      targetPageId = pageId as PageStatus
    }

    pageChanger({ pageId, duration })
    dispatch(setCurrentStatus(targetPageId))
  }
}

// デバッグ用：ページ履歴を取得する関数
export const getPageHistory = () => pageHistory
