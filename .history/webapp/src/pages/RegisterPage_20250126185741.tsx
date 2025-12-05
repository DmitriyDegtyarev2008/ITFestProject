import { RegisterForm } from '../components/RegisterForm'
import {Link} from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <div>
      <h1>Регистрация</h1>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage