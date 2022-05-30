import Banner from 'components/Banner'
import Performances from 'components/Performances'
import Portfolio from 'components/Portfolio'
import Contact from 'components/Contact'

import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Banner />
      <Performances />
      <Portfolio />
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
