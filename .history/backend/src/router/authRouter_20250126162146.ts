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
        resolve({ input, ctx}) {
            const user = ctx.users.find(
                (u) => u.email === input.email && u.password == input.password
            )
            if (!user) {
                throw new Error('Неверный email или пароль')
            }
            return {success: true, message: ''}
        }
    })

