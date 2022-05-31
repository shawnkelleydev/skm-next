import Input from '../Input'

import styles from './styles.module.css'

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => handleSubmit(e)}
    >
      <Input
        id='name'
        type='text'
      />
      <Input
        id='email'
        type='email'
      />
      <Input
        id='message'
        type='textarea'
      />
      <button type='submit'>submit</button>
    </form>
  )
}
