import Banner from 'components/Banner'
import Contact from 'components/Contact'
import Performances from 'components/Performances'
import Portfolio from 'components/Portfolio'
import Recordings from 'components/Recordings'

import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Banner />
      <Performances />
      <Portfolio />
      <Recordings />
      <Contact />
    </div>
  )
}

// <hoc><component /></hoc>

// <Banner />
// <FAQ />
// <Performances />
// <Portfolio />
// <Contact />
