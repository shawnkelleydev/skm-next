import Link from 'next/link'
import { meta } from 'utils/constants/data'

import Tuba from 'components/Tuba'

import styles from './styles.module.css'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href='/'>
        <a>
          <h1>{meta.TITLE}</h1>
        </a>
      </Link>
    </div>
  )
}
