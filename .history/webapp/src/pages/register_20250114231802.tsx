import {trpc} from '../lib/trpc'
import {Link} from 'react-router-'

function Register() {
    const registerMutation = trpc.user.register.useMutation()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        try {
            await registerMutation.mutateAsync({email, password})
            alert('Registration successful! Please log in.')
        } catch (error) {
            alert((error as Error).message)
        }
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input type="text" placeholder="Nickname" />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        <Link to="/">Go to HomePage</Link>
      </div>
    )
}

export default Register