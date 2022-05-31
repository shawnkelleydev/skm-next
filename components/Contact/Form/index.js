import { useState } from 'react'
import Input from '../Input'

import styles from './styles.module.css'

export default function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = { name, email, message }
    console.log(formData)
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => handleSubmit(e)}
    >
      <Input
        id='name'
        setValue={setName}
        type='text'
        value={name}
      />
      <Input
        id='email'
        setValue={setEmail}
        type='email'
        value={email}
      />
      <Input
        id='message'
        setValue={setMessage}
        type='textarea'
        value={message}
      />
      <button type='submit'>submit</button>
    </form>
  )
}
