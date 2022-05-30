import styles from './styles.module.css'

export default function Strip({ children, className, width }) {
  return (
    <section className={`${styles.strip} ${className}`}>
      <div
        className={styles.container}
        data-width={width}
      >
        {children}
      </div>
    </section>
  )
}
