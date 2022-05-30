import About from 'components/About'
import Headshot from 'components/Headshot'
import Strip from 'components/Strip'

import styles from './styles.module.css'

export default function Banner() {
  return (
    <Strip width='narrow'>
      <div className={styles.banner}>
        <Headshot />
        <About />
      </div>
    </Strip>
  )
}
