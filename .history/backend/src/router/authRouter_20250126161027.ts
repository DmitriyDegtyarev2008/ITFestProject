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
            const user
        }
    })

