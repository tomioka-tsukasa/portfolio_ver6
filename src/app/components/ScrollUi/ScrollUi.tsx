import * as styles from './ScrollUi.css'

export const ScrollUi = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.lineContainer}>
          <div className={styles.line} />
        </div>
        <div className={styles.markerContainer}>
          <div className={styles.markerInner}>
            <div className={styles.text}>
              Entry Site.
            </div>
            {/* <div className={styles.markerItemOuter} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
