import {initTRPC} from '@trpc/server'

const trpc = initTRPC.create()

export const TrpcRouter = trpc.router({
    getIdeas: trpc.procedure.query(() => {
        return {}
    })
})