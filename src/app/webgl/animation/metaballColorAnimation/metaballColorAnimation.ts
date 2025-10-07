import * as THREE from 'three'
import gsap from 'gsap'
import { webglCtrl } from '@/app/webgl/setupMember'
import { COLOR_PATTERN_VALUES } from '@/app/webgl/metaballMember'

// アニメーション状態管理
let currentColorAnimation: gsap.core.Tween | null = null

/**
 * メタボールの色を滑らかに変更する関数
 * @param colorPattern - 変更先の色パターン ('white' | 'blue' | 'yellow' | 'red')
 * @param duration - アニメーション時間（秒）
 * @param ease - イージング関数
 */
export const animateMetaballColor = (
  colorPattern: keyof typeof COLOR_PATTERN_VALUES,
  duration: number = 0.3,
  ease: string = 'power2.out'
): void => {
  if (!webglCtrl.metaballController?.marchingCubesManager?.marchingCubes?.material) {
    console.warn('Metaball material not found')

    return
  }

  const material = webglCtrl.metaballController.marchingCubesManager.marchingCubes.material as THREE.ShaderMaterial

  if (!material.uniforms?.uColorPattern) {
    console.warn('uColorPattern uniform not found')

    return
  }

  const targetPattern = COLOR_PATTERN_VALUES[colorPattern]
  const animationPattern = {
    value: material.uniforms.uColorPattern.value
  }

  // 既存のアニメーションを停止
  if (currentColorAnimation) {
    currentColorAnimation.kill()
  }

  // 新しいアニメーションを開始
  currentColorAnimation = gsap.to(animationPattern, {
    value: targetPattern,
    duration: duration,
    ease: ease,
    onUpdate: () => {
      if (material.uniforms?.uColorPattern) {
        material.uniforms.uColorPattern.value = animationPattern.value
      }
    },
    onComplete: () => {
      currentColorAnimation = null
    }
  })

  // uColorは常に白に保つ
  if (material.uniforms?.uColor) {
    material.uniforms.uColor.value.setRGB(1, 1, 1)
  }
}

/**
 * 現在のカラーアニメーションを停止する関数
 */
export const stopMetaballColorAnimation = (): void => {
  if (currentColorAnimation) {
    currentColorAnimation.kill()
    currentColorAnimation = null
  }
}

/**
 * 現在のカラーアニメーションが実行中かどうかを返す関数
 */
export const isMetaballColorAnimating = (): boolean => {
  return currentColorAnimation !== null
}
