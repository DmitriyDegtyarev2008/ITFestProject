import {z} from 'zod'
import {router, publicProcedure} from '@trpc/server'
import { Content } from '../content'

export const authRouter = router<Context>()
    .mutation('register', {
        input: z.object({
            email: z.string().email(),
            password: z.string().min(6),
        }),
        resolve({ input, ctx}) {
            const userExists = ctx.users.find((user) => user.email === input.email)
            if (userExists) {
                throw new Error('Пользователь уже существует')
            }
            ctx.user.push(input)
            return {success: true, message: 'Регистрация успешна'}
        },

    })
    .mutation('login', {
        input: z.object({
            email: z.string().email(),
            password: z.string()
        })
        resolve
    })

