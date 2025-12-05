import { z } from 'zod'
import {createTRPCRouter, publicProcedure} from '@trpc/server'


export const userRouter = createTRPCRouter({
    register: publicProcedure({
        .input(z.object({
            email: z.string()
        }))
    })
})
