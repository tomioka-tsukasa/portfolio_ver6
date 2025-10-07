import { WorkPage } from '../components/WorkPage/WorkPage'
import { PageTitle } from '@/app/components/PageTitle/PageTitle'
import * as styles from '../components/WorkPage/Body.css'

const TosuigeiOfficialSitePage = () => {
  return <>
    <PageTitle title={'Works'} />
    <WorkPage
      title='Tosuigei Official Site.'
      desc='飲食店「陶酔芸」公式サイト実装'
      thumbnail={
        {
          src: '/assets/images/work/work-tosuigei-official-site@1.5.jpg',
          alt: 'Tosuigei Official Site',
        }
      }
      pageUrl='https://works-tosuigei.tsukasa-tomioka-portfolio.com/'
      body={
        <div className={styles.body}>
          <p>
            「空間に陶酔する、特別な鮨の体験を」をコンセプトとする鮨処の公式サイトを制作させていただきました。一つひとつデザインコンセプトが設けられた食事スペースは、幻想的で芸術的な空間となっており、思わず酔いしれてしまうその空間で特別な鮨の体験ができるお店となっています。<br />
            <br />
            そんな特別な空間を美しく魅せるために、黒のベースカラーに神秘的な印象を与えられるカラーやレイアウトを組みました。
          </p>
          <p>
            ※ クライアントの経営都合で制作断念となり、こちらのサイトは実績用に内容を架空のものに差し替えています。
          </p>
        </div>
      }
    />
  </>
}

export default TosuigeiOfficialSitePage
