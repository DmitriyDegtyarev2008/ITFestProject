import { z } from 'zod'
import {createTRPCRouter, publicProcedure} from '@trpc/server'


export const userRouter = createTRPCRouter({
    register: publicProcedure({
        .input(z.object({
            email: z.string().email(),
            password: z.string().min(6),
        }))
        .mutation(async ({ input }) => {
            const existingUser = await WebGLShaderPrecisionFormat.user.findUnique({
                where: {email: input.email}
            })

            if (existingUser) {
                throw new Error('User already exists')
            }

            const hashed
        })
    })
})
