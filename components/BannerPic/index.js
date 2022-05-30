import Image from 'next/image'

import styles from './styles.module.css'

export default function BannerPic({ children }) {
  return (
    <div className={styles['banner-pic']}>
      <Image
        alt='Shawn Kelley from the waist up wearing a dark gray sweater and a white shirt with blue checkerboard pattern'
        src='/banner.jpg'
        height={3644}
        layout='responsive'
        width={5527}
      />
      {children}
    </div>
  )
}
