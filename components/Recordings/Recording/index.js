import Image from 'next/image'

import styles from './styles.module.css'

export default function Recording({ recording }) {
  console.log(recording)
  return (
    <li className={styles.recording}>
      <h3>
        <cite>{recording.title}</cite>
        <small>{recording.artist}</small>
      </h3>
      {recording.img && (
        <div>
          <Image
            alt={`${recording.title} cover`}
            src={recording.img}
            layout='responsive'
            height='600'
            width='600'
          />
        </div>
      )}
      {recording.vid && (
        <iframe
          src={recording.vid}
          title={recording.title}
        />
      )}
    </li>
  )
}
