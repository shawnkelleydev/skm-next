import Image from 'next/image'

import styles from './styles.module.css'

export default function Banner() {
  return (
    <div className={styles.headshot}>
      <Image
        alt='headshot of Shawn Kelley'
        src='/headshot.png'
        height={696}
        layout='intrinsic'
        width={696}
      />
    </div>
  )
}
