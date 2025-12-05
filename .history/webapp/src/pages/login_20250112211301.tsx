import {trpc} from '../lib/trpc'

export default function login() {
    const loginMutation = trpc.useQueries.login.useMutation()

    const handleSubmit = async (e: React.FormEvent<HTMLFormEle)
}