import {trpc} from '../lib/trpc'

export default function login() {
    const loginMutation = trpc.useQueries.login.useMutation()

    const ham
}