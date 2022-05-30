import { meta } from 'utils/constants/data'

import styles from './styles.module.css'

export default function Logo() {
  const titleArray = meta.TITLE.split(' ')

  return (
    <h1 className={styles.logo}>
      {titleArray.map((word, index) => (
        <span key={index}>{word}</span>
      ))}
    </h1>
  )
}
