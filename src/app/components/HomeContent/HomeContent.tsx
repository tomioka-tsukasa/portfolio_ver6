import * as styles from './HomeContent.css'

export const HomeContent = () => {
  return <>
    <div className={styles.root}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Tsukasa Tomioka
        </h1>
        <p className={styles.subTitle}>
          Portfolio Site.
        </p>
      </main>
    </div>
  </>
}
