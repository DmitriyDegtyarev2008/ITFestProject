import {router} from '@trpc/server'
import { authRouter } from './authRouter'

export const appRouter = router({
    auth: authRouter,
})

export type AppRouter = typeof appRouter