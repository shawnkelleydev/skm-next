import Action from 'components/Action'
import styles from './styles.module.css'

export default function About() {
  return (
    <article className={styles.about}>
      <h2>about</h2>
      <p>
        Shawn Kelley is a composer & software engineer in the Denver metro area.
      </p>
      <p>
        Kelley is the creator of <cite>Urban Suite for Tuba Quartet</cite>.
      </p>
      <div>
        <Action href='#contact'>contact shawn</Action>
      </div>
    </article>
  )
}
