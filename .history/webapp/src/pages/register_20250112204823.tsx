import {trpc} from '../lib/trpc'

exoport default function Register() {
    const regiterMutation = trpc.user.register.useMutation()
}