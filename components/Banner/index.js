import About from 'components/About'
import BannerPic from 'components/BannerPic'
import Strip from 'components/Strip'

import styles from './styles.module.css'

export default function Banner() {
  return (
    <Strip>
      <div className={styles.banner}>
        <BannerPic>
          <About />
        </BannerPic>
      </div>
    </Strip>
  )
}
