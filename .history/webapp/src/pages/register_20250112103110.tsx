import {trpc} from '@trpc/client'

export default function Register() {
    const registerMutation = trpc.user.register.useMutation()

    const handle
}