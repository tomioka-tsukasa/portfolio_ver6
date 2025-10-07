import * as styles from './page.css'
import { WorkList } from './components/WorkList/WorkList'
import { PageTitle } from '../components/PageTitle/PageTitle'

const WorksPage = () => {
  return <>
    <PageTitle title='Works' />
    <div className={styles.workList}>
      <WorkList />
    </div>
  </>
}

export default WorksPage
