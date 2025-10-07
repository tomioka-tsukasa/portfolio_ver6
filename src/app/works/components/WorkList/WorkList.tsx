'use client'

import * as styles from './WorkList.css'
import { WorkItem } from '../WorkItem/WorkItem'
import { animateMetaballColor } from '@/app/webgl/animation/metaballColorAnimation/metaballColorAnimation'
import { useAppSelector } from '@/app/store/hook'
import { useState } from 'react'

export const tags = {
  webgl: {
    id: 'webgl',
    name: 'WebGL',
  },
  threejs: {
    id: 'threejs',
    name: 'Three.js',
  },
  blender: {
    id: 'blender',
    name: 'Blender',
  },
  cg3d: {
    id: 'cg3d',
    name: '3D/CG',
  },
  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
  },
  lp: {
    id: 'lp',
    name: 'LP制作',
  },
  gsap: {
    id: 'gsap',
    name: 'GSAPアニメーション',
  },
  blanding: {
    id: 'blanding',
    name: 'ブランディング制作',
  },
  webdesign: {
    id: 'webdesign',
    name: 'Webデザイン担当',
  },
}

export const WorkList = () => {
  const [isHovered, setIsHovered] = useState(false)

  // 現在のページ状態を監視
  const currentPage = useAppSelector(selector => selector.pageStatus.currentPage)

  // worksページでのみホバーイベントを有効にする
  const isHoverEnabled = currentPage === 'works'

  // workItemホバー時のメタボール色変更（条件付き）
  const handleWorkItemHover = () => {
    if (isHoverEnabled) {
      animateMetaballColor('yellow', 1.2, 'power2.out')
      setIsHovered(true)
    }
  }

  // workItemホバー解除時のメタボール色復元（条件付き）
  const handleWorkItemLeave = () => {
    if (isHoverEnabled) {
      animateMetaballColor('blue', 1.2, 'power2.out')
      setIsHovered(false)
    }
  }

  const work = [
    {
      id: 'car-show-project',
      title: 'Car Show Project',
      tags: [tags.webgl, tags.threejs, tags.blender, tags.cg3d],
      desc: '車の3DモデルをWeb上で展示するプロジェクト',
      image: {
        src: '/assets/images/work/work-project-car-show@1.5.jpg',
        alt: 'Work 1',
      },
      date: '2025.07.01',
    },
    {
      id: 'branchera-sapporo-lp',
      title: 'Branchera Sapporo LP',
      tags: [{ id: '1', name: 'Tag 1' }, { id: '2', name: 'Tag 2' }],
      desc: '長谷工不動産「BRANCHERA」札幌シリーズ告知LP',
      image: {
        src: '/assets/images/work/work-project-car-show@1.5.jpg',
        alt: 'Work 1',
      },
      date: '2025.07.01',
    },
    {
      id: 'tosuigei-official-site',
      title: 'Tosuigei Official Site',
      tags: [tags.webdesign, tags.lp, tags.gsap, tags.blanding],
      desc: '飲食店「陶酔芸」公式サイト実装',
      image: {
        src: '/assets/images/work/work-project-car-show@1.5.jpg',
        alt: 'Work 1',
      },
      date: '2025.07.01',
    },
  ]

  return <>
    <div className={styles.root}>
      {work.map((work, i) => (
        <div
          key={i}
          className={styles.workItem}
          onMouseEnter={handleWorkItemHover}
          onMouseLeave={handleWorkItemLeave}
        >
          <WorkItem number={String(i + 1).padStart(3, '0')} {...work} isHovered={isHovered} />
        </div>
      ))}
    </div>
  </>
}
