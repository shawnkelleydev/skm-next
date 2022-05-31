import { recordings } from 'utils/constants/data'

import Strip from 'components/Strip'
import Recording from './Recording'

import styles from './styles.module.css'

export default function Recordings() {
  return (
    <Strip>
      <div className={styles.recordings}>
        <h2>Recordings</h2>
        <ul>
          {recordings
            .filter((recording) => recording.title)
            .map((recording, index) => (
              <Recording
                key={index}
                recording={recording}
              />
            ))}
        </ul>
      </div>
    </Strip>
  )
}
