import { trpc } from '../lib/trpc'
import { useState } from 'react'
import styles from './RegisterP/0odule.css'

export const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const registerMutation = trpc.register.useMutation()

  const handleRegister = async () => {
    try {
      const result = await registerMutation.mutateAsync({ email, password })
      alert(result.message)
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <div className={styles.signupContainer}>
      <h1 className={styles.signupTitle}>Sign Up</h1>
      <div className={styles.signupForm}>
        <label className={styles.formLabel}>
          Nickname
          <input type="text" className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          E-mail
          <input type="email" className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Password
          <input type="password" className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Password Again
          <input type="password" className={styles.formInput} />
        </label>
      </div>
      <div className={styles.signupFooter}>
        <p className={styles.loginText}>
          Do you already have an account?{' '}
          <a href="/login" className={styles.loginLink}>
            Enter
          </a>
        </p>
      </div>
      <a href="/dashboard">
        <button className={styles.signupButton}>Sign in</button>
      </a>
    </div>
  )
}

export default RegisterForm