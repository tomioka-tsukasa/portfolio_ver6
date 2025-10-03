import * as styles from './ScrollUi.css'

export const ScrollUi = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.text}>
          Scroll
        </div>
        <div className={styles.line} />
        <div className={styles.markerContainer}>
          <div className={styles.markerInner}>
            <div className={styles.markerItemOuter} />
            <div className={styles.markerItem} />
          </div>
        </div>
      </div>
    </div>
  )
}
