import Form from './Form'
import Strip from 'components/Strip'

import styles from './styles.module.css'

export default function Contact() {
  return (
    <Strip>
      <div
        className={styles.contact}
        id='contact'
      >
        <h2>Contact</h2>
        <Form />
      </div>
    </Strip>
  )
}
