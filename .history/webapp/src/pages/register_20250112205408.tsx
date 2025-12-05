import {trpc} from '../lib/trpc'

exoport default function Register() {
    const regiterMutation = trpc.user.register.useMutation()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formF 
    }
}