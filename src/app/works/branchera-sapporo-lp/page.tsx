import { WorkPage } from '../components/WorkPage/WorkPage'
import { PageTitle } from '@/app/components/PageTitle/PageTitle'
import * as styles from '../components/WorkPage/Body.css'

const BrancheraSapporoLpPage = () => {
  return <>
    <PageTitle title={'Works'} />
    <WorkPage
      title='Branchera Sapporo LP.'
      desc='長谷工不動産「BRANCHERA」札幌シリーズ告知LP'
      thumbnail={
        {
          src: '/assets/images/work/work-branchera-sapporo-lp@1.5.jpg',
          alt: 'Branchera Sapporo LP',
        }
      }
      pageUrl='https://www.branchera.com/lp/sapporo/'
      body={
        <div className={styles.body}>
          <p>
            札幌に分譲マンション「ブランシエラ」シリーズが随時リリースされる事を機に、物件販売のティザー的な役割となるLP実装を受注。後続の「ブランシエラ東札幌サンリヤン」「ブランシエラ豊平三条」公式サイトの先駆けとなった。
          </p>
          <p>
            実装前にPMとデザイナーと共にアニメーションのイメージや方向性を固めるところから入りました。スクロール検知でのフェードや、セクション毎にレイヤー階層を分けたり、細かなインタラクションを施すようにデザインを擦り合わせました。<br />
            <br />
            実装は1人でしたが、コンポーネント設計とライブラリ要件定義から行い、アニメーションにはGSAPを採用しました。
          </p>
        </div>
      }
    />
  </>
}

export default BrancheraSapporoLpPage
