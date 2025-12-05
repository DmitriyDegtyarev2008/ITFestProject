import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import {trpcRouter} from './trpc'
import cors from 'cors'

const expressApp = express()
expressApp.use(cors())
expressApp.get('/ping', (req, res) => {
    res.send('pong')
})    // endpoints

expressApp.use('/trpc', trpcExpress.createExpressMiddleware({
    router: trpcRouter,
}))


expressApp.get('/regForm', (req, res) => {  //endpoint с адресом на форму регистрации
    res.send(getPost)
})
expressApp.listen(3000, () => {
    console.log('Listening at http://localhost:3000')
})

