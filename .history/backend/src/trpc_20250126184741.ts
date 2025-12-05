import {initTRPC} from '@trpc/server'
import {z} from 'zod'
    
const posts = [
    { id: 1, author: 'Author1', content: 'Post content 1' },
    { id: 2, author: 'Author2', content: 'Post content 2' }
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
    getPosts: trpc.procedure.query(() => {
        return {posts}
    })     // запрос из сервера get
})




export type TrpcRouter = typeof trpcRouter