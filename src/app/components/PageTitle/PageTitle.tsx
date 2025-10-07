import * as styles from './PageTitle.css'

interface PageTitleProps {
  title: string
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        {title}
      </h1>
    </div>
  )
}
