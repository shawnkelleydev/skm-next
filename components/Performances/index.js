import { institutions } from 'utils/constants/data'

import Strip from 'components/Strip'

import styles from './styles.module.css'

export default function Performances() {
  return (
    <Strip>
      <div className={styles.performances}>
        <h2>as performed by</h2>
        <ul>
          {institutions.map((institution, index) => (
            <li key={index}>{institution}</li>
          ))}
        </ul>
      </div>
    </Strip>
  )
}
