import {initTRPC} from '@trpc/server'

const trpc = initTRPC.create()

const trpcRouter = trpc.router({
    getForm: trpc.procedure.query(() => {
        return {reg}
    })     // запрос из сервера get
})