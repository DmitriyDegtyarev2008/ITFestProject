import {trpc} from '../lib/trpc'
import {Link} from 'react-router-dom'

export default function Login() {
    const loginMutation = trpc.user.login.useMutation()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        try {
            await loginMutation.mutateAsync({email, password})
            alert('Login successful!')
        } catch (error) {
            alert((error as Error).message)
        }
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input name="email" type="email" placeholder="email" />
          <input name="password" type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <Link to="/">Go to HomePage</Link>
      </div>
    )
}