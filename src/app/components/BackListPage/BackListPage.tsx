import Link from 'next/link'
import * as styles from './BackListPage.css'

interface BackListPageProps {
  text: string
  href: string
}

export const BackListPage = ({
  text,
  href,
}: BackListPageProps) => {
  return (
    <Link href={href} className={styles.root}>
      <div className={styles.text}>
        {text}
      </div>
    </Link>
  )
}
