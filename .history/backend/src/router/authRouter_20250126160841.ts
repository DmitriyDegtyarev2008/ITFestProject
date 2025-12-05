import {z} from 'zod'
import {router, publicProcedure} from '@trpc/server'
import { Content } from '../content'

export const authRouter = router<Context>()
    .mutation('register', {
        input: z.object({
            
        })
    })

