import Link from 'next/link'
import { meta } from 'utils/constants/data'

import Tuba from 'components/Tuba'

import styles from './styles.module.css'

export default function Logo() {
  return <h1 className={styles.logo}>{meta.TITLE}</h1>
}
