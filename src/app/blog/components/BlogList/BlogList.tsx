import * as styles from './BlogList.css'
import { BlogItem } from '../BlogItem/BlogItem'

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

  return <>
    <div className={styles.root}>
      <div className={styles.blogList}>
        {blog.map((blog, i) => (
          <div key={i} className={styles.blogItem}>
            <BlogItem {...blog} />
          </div>
        ))}
      </div>
    </div>
  </>
}
