import * as styles from './page.css'
import { PageTitle } from '../components/PageTitle/PageTitle'
import { BlogList } from './components/BlogList/BlogList'

const BlogPage = () => {
  return <>
    <div className={styles.root}>
      <PageTitle title='Blog' />
      <div className={styles.blogList}>
        <BlogList />
      </div>
    </div>
  </>
}

export default BlogPage
