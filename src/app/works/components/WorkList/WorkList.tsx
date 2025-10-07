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
}

export const WorkList = () => {
  const work = [
    {
      id: '1',
      title: 'Car Show Project',
      tags: [tags.webgl, tags.threejs, tags.blender, tags.cg3d],
      image: {
        src: '/assets/images/work/work-project-car-show@1.5.jpg',
        alt: 'Work 1',
      },
      date: '2025.07.01',
    },
    {
      id: '1',
      title: 'Car Show Project',
      tags: [{ id: '1', name: 'Tag 1' }, { id: '2', name: 'Tag 2' }],
      image: {
        src: '/assets/images/work/work-project-car-show@1.5.jpg',
        alt: 'Work 1',
      },
      date: '2025.07.01',
    },
    {
      id: '1',
      title: 'Car Show Project',
      tags: [{ id: '1', name: 'Tag 1' }, { id: '2', name: 'Tag 2' }],
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
