import { WorkPage } from '../components/WorkPage/WorkPage'
import { PageTitle } from '@/app/components/PageTitle/PageTitle'
import * as styles from '../components/WorkPage/Body.css'

const WmsWebAppPage = () => {
  return <>
    <PageTitle title={'Works'} />
    <WorkPage
      title='WMS Web App.'
      desc='在庫管理Webアプリ(WMS)開発支援'
      thumbnail={
        {
          src: '/assets/images/work/work-wms-web-app@1.5.jpg',
          alt: 'WMS Web App',
        }
      }
      body={
        <div className={styles.body}>
          <p>
            3,000〜4,000荷主で稼働する倉庫管理システム(WMS)の新規Webアプリ開発のプロジェクトに、UI制作からフロントエンドの要件定義、技術選定、詳細設計、一部実装まで業務提携で参画。オンプレミス/パッケージソフトとして提供されているWMSアプリをクラウド型として新規展開するプロジェクト。<br />
            <br />
            私は、業務提携で下記を担当させていただきました。
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>フロントの進行管理/要件提案</li>
            <li className={styles.listItem}>UIの構成制作 / ベンダー管理</li>
            <li className={styles.listItem}>フロントエンドの要件定義 / 詳細設計</li>
            <li className={styles.listItem}>フロントエンド実装 ※一部担当</li>
          </ul>
        </div>
      }
    />
  </>
}

export default WmsWebAppPage
