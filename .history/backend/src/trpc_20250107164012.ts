import {initTRPC} from '@trpc/server'

posts = [
  {id}
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
    getPosts: trpc.procedure.query(() => {
        return {posts}
    })     // запрос из сервера get
})

export type TrpcRouter = typeof trpcRouter