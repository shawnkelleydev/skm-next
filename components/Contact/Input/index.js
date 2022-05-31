import styles from './styles.module.css'

export default function Input({ id, setValue, type, value }) {
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
          onChange={(e) => setValue(e.target.value)}
          required
          value={value}
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
        onChange={(e) => setValue(e.target.value)}
        required
        value={value}
      />
    </label>
  )
}
