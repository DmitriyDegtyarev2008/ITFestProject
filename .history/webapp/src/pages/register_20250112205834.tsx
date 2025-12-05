import {trpc} from '../lib/trpc'

exoport default function Register() {
    const regiterMutation = trpc.user.register.useMutation()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        try {
            await registerMutation.mutateAsync({email, password})
            alert('Registration successful! Please log in.')
        } catch (error) {
            
        }
    }
}