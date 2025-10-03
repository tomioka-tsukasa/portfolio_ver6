'use client'

import * as styles from './HomeContent.css'
import { ScrollUi } from '../ScrollUi/ScrollUi'
import { webglCtrl } from '../../webgl/setupMember'
import { cameraAnimation } from '../../webgl/animation/cameraAnimation/cameraAnimation'
import { cameraWork } from '../../webgl/setup/cameraWork'
import { fixCamerawork } from '@/lib/threejs/fixCamerawork/fixCamerawork'
import gsap from 'gsap'
import { setCurrentPage } from '../../store/slice/pageStatus/pageStatus'
import { useAppDispatch, useAppSelector } from '@/app/store/hook'

export const HomeContent = () => {
  const dispatch = useAppDispatch()
  const pageStatus = useAppSelector(selector => selector.pageStatus.currentPage)

  const handleMainClick = () => {
    // カメラワーク: ホーム
    const menuCameraWork = fixCamerawork(
      cameraWork.menu.position,
      cameraWork.menu.target,
      cameraWork.menu.rotation
    )

    // カメラワーク: メニュー
    const homeCameraWork = fixCamerawork(
      cameraWork.default.position,
      cameraWork.default.target,
      cameraWork.default.rotation
    )

    if (pageStatus === 'home') {
      // home -> menu アニメーション
      webglCtrl.metaballController?.animateToMenuState(2)

      cameraAnimation(
        menuCameraWork.positionVector,
        menuCameraWork.targetVector,
        2000
      )

      // メタボール位置をスムーズにアニメーション
      if (webglCtrl.metaballController?.marchingCubesManager.marchingCubes) {
        const currentPos = webglCtrl.metaballController.marchingCubesManager.marchingCubes.position
        console.log('Home -> Menu: 現在位置', currentPos.x, currentPos.y, currentPos.z)

        gsap.to(currentPos, {
          x: -30,
          y: currentPos.y,
          z: currentPos.z,
          duration: 2,
          ease: 'power2.inOut',
          onComplete: () => {
            // 完了後に正確な値を強制設定
            console.log('Home -> Menu: 完了後位置', currentPos.x, currentPos.y, currentPos.z)
          }
        })
      }

      dispatch(setCurrentPage('menu'))

    } else if (pageStatus === 'menu') {

      // menu -> home アニメーション
      webglCtrl.metaballController?.animateToHomeState(2)

      cameraAnimation(
        homeCameraWork.positionVector,
        homeCameraWork.targetVector,
        2000
      )

      // メタボール位置をスムーズにリセット
      if (webglCtrl.metaballController?.marchingCubesManager.marchingCubes) {
        const currentPos = webglCtrl.metaballController.marchingCubesManager.marchingCubes.position

        gsap.to(currentPos, {
          x: 0,
          y: currentPos.y,
          z: currentPos.z,
          duration: 2,
          ease: 'power2.inOut',
          onComplete: () => {
            // 完了後に正確な値を強制設定
            console.log('Menu -> Home: 完了後位置', currentPos.x, currentPos.y, currentPos.z)
          }
        })
      }

      dispatch(setCurrentPage('home'))
    }
  }

  return <>
    <div className={`${styles.root} ${pageStatus === 'home' ? '' : styles.unactive}`}>
      <main className={styles.main} onClick={handleMainClick}>
        <h1 className={styles.title}>
          Tsukasa Tomioka
        </h1>
        <p className={styles.subTitle}>
          Portfolio Site.
        </p>
      </main>
      <ScrollUi />
    </div>
  </>
}
