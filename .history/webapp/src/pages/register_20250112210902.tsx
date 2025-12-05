import {trpc} from '../lib/trpc'

export default function Register() {
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
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            <button type="submit">Sign Up</button>
        </form>
    )
}