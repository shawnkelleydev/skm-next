import styles from './styles.module.css'

export default function Action({ text, url }) {
  return (
    <a
      className={styles.action}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      {text}
    </a>
  )
}
