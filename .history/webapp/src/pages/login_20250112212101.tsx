import {trpc} from '../lib/trpc'

export default function login() {
    const loginMutation = trpc.useQueries.login.useMutation()

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
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input name="email" type="email" placeholder="email"/>
            <input name="password" type="password" placeholder="Password" required/>
            <
        </form>
    )
}