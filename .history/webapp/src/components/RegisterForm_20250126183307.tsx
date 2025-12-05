import { trpc } from '../../../backend/src/trpc.ts' 
import { useState } from 'react'

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
    <div>
      <h2>Регистрация</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
      <button onClick={handleRegister}>Зарегистрироваться</button>
    </div>
  )
}
