import { AboutSentence } from './components/AboutSentence/AboutSentence'
import { PageTitle } from '../components/PageTitle/PageTitle'
import * as styles from './page.css'

const AboutPage = () => {
  return <>
    <div className={styles.root}>
      <PageTitle title='About' />
      <div className={styles.aboutSentence}>
        <AboutSentence />
      </div>
    </div>
  </>
}

export default AboutPage
