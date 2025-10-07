import { WorkPage } from '../components/WorkPage/WorkPage'
import { PageTitle } from '@/app/components/PageTitle/PageTitle'
import * as styles from '../components/WorkPage/Body.css'

const CarShowProjectPage = () => {
  return <>
    <PageTitle title={'Works'} />
    <WorkPage
      title='Car Show Project.'
      desc='車の3DモデルをWeb上で展示するプロジェクト'
      thumbnail={
        {
          src: '/assets/images/work/work-project-car-show@1.5.jpg',
          alt: 'Car Show Project',
        }
      }
      pageUrl='https://projects-car-show.vercel.app/'
      body={
        <div className={styles.body}>
          <p>
            Web上で車の色や環境光、カメラワークをカスタマイズして閲覧できるサイトを制作しました。Blenderで制作したワールドと、<a className={styles.link} href='https://sketchfab.com/3d-models/chevrolet-corvette-c7-2b509d1bce104224b147c81757f6f43a' target='_blank'>こちらでダウンロードさせていただいた車のモデル</a>を、Three.jsでカスタマイズできる機能を実装。<br />
            <br />
            また、Three.jsのパフォーマンスで気をつけたことや、BlenderとThree.jsで実装した詳細を、下記の記事にまとめました。
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a className={styles.link} href='https://zenn.dev/fabrica/articles/a4177b5cf72658' target='_blank'>
                【Blender x Three.js】車の3DモデルViewer実装で試したこと
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.link} href='https://zenn.dev/fabrica/articles/91add47f1f72e0' target='_blank'>
                【Three.js x ハイポリモデル】パフォーマンスで気をつけたこと
              </a>
            </li>
          </ul>
        </div>
      }
    />
  </>
}

export default CarShowProjectPage
