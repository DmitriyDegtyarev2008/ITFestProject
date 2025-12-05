import { z } from 'zod'
import {createTRPCRouter, publicProcedure} from '@trpc/server'


export const userRouter = createTRPCRouter({
    register: public
})
