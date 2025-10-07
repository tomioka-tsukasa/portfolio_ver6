'use client'

import * as styles from './BlogList.css'
import { BlogItem } from '../BlogItem/BlogItem'
import { animateMetaballColor } from '@/app/webgl/animation/metaballColorAnimation/metaballColorAnimation'
import { useAppSelector } from '@/app/store/hook'

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

export const BlogList = () => {
  const blog = [
    {
      title: '【Blender x Three.js】車の3DモデルViewer実装で試したこと',
      tags: [tags.webgl, tags.threejs, tags.blender, tags.cg3d],
      desc: '車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト',
      icon: '👋',
      date: '2025.07.01',
    },
    {
      title: '【Blender x Three.js】車の3DモデルViewer実装で試したこと',
      tags: [tags.webgl, tags.threejs, tags.blender, tags.cg3d],
      desc: '車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト',
      icon: '🚗',
      date: '2025.07.01',
    },
    {
      title: '【Blender x Three.js】車の3DモデルViewer実装で試したこと',
      tags: [tags.webgl, tags.threejs, tags.blender, tags.cg3d],
      desc: '車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト',
      icon: '⚙️',
      date: '2025.07.01',
    },
    {
      title: '【Blender x Three.js】車の3DモデルViewer実装で試したこと',
      tags: [tags.webgl, tags.threejs, tags.blender, tags.cg3d],
      desc: '車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト',
      icon: '👋',
      date: '2025.07.01',
    },
    {
      title: '【Blender x Three.js】車の3DモデルViewer実装で試したこと',
      tags: [tags.webgl, tags.threejs, tags.blender, tags.cg3d],
      desc: '車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト',
      icon: '🚗',
      date: '2025.07.01',
    },
    {
      title: '【Blender x Three.js】車の3DモデルViewer実装で試したこと',
      tags: [tags.webgl, tags.threejs, tags.blender, tags.cg3d],
      desc: '車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト',
      icon: '⚙️',
      date: '2025.07.01',
    },
    {
      title: '【Blender x Three.js】車の3DモデルViewer実装で試したこと',
      tags: [tags.webgl, tags.threejs, tags.blender, tags.cg3d],
      desc: '車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト',
      icon: '🚗',
      date: '2025.07.01',
    },
    {
      title: '【Blender x Three.js】車の3DモデルViewer実装で試したこと',
      tags: [tags.webgl, tags.threejs, tags.blender, tags.cg3d],
      desc: '車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト 車の3DモデルをWeb上で展示するプロジェクト',
      icon: '⚙️',
      date: '2025.07.01',
    },
  ]

  // 現在のページ状態を監視
  const currentPage = useAppSelector(selector => selector.pageStatus.currentPage)

  // worksページでのみホバーイベントを有効にする
  const isHoverEnabled = currentPage === 'blog'

  // workItemホバー時のメタボール色変更（条件付き）
  const handleWorkItemHover = () => {
    if (isHoverEnabled) {
      animateMetaballColor('yellow', 1.2, 'power2.out')
    }
  }

  // workItemホバー解除時のメタボール色復元（条件付き）
  const handleWorkItemLeave = () => {
    if (isHoverEnabled) {
      animateMetaballColor('blue', 1.2, 'power2.out')
    }
  }

  return <>
    <div className={styles.root}>
      {blog.map((blog, i) => (
        <div
          key={i}
          className={styles.blogItem}
          onMouseEnter={handleWorkItemHover}
          onMouseLeave={handleWorkItemLeave}
        >
          <BlogItem {...blog} />
        </div>
      ))}
    </div>
  </>
}
