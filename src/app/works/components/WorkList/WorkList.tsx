import * as styles from './WorkList.css'
import { WorkItem } from '../WorkItem/WorkItem'

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
        <div key={i} className={styles.workItem}>
          <WorkItem number={String(i + 1).padStart(3, '0')} {...work} />
        </div>
      ))}
    </div>
  </>
}
