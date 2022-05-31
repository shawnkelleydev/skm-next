import styles from './styles.module.css'

export default function Input({ id, type }) {
  if (type === 'textarea') {
    return (
      <label
        className={styles.textarea}
        htmlFor={id}
      >
        <span>{id}</span>
        <textarea
          id={id}
          name={id}
        />
      </label>
    )
  }

  return (
    <label
      className={styles.input}
      htmlFor={id}
    >
      <span>{id}</span>
      <input
        type={type}
        id={id}
        name={id}
      />
    </label>
  )
}
