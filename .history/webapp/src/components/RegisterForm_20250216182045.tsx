import { trpc } from '../lib/trpc'
import { useState } from 'react'
import styles from './RegisterPage.module.css'

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
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <div className="signup-form">
        <label className="form-label">
          Nickname
          <input type="text" className="form-input" />
        </label>
        <label className="form-label">
          E-mail
          <input type="email" className="form-input" />
        </label>
        <label className="form-label">
          Password
          <input type="password" className="form-input" />
        </label>
        <label className="form-label">
          Password Again
          <input type="password" className="form-input" />
        </label>
      </div>
      <div className="signup-footer">
        <p className="login-text">
          Do you already have an account?{' '}
          <a href="/login" className="login-link">
            Enter
          </a>
        </p>
      </div>
      <a href="/dashboard">
        <button className="signup-button">Sign in</button>
      </a>
    </div>
  )
}
