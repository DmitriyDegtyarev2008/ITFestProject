import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
 

const expressApp = express()
expressApp.get('/ping', (req, res) => {
    res.send('pong')
})    // endpoints

expressApp.use('/trpc', trpcExpress)


// expressApp.get('/regForm', (req, res) => {  //endpoint с адресом на форму регистрации
//     res.send(regForm)
// })
expressApp.listen(3000, () => {
    console.log('Listening at http://localhost:3000')
})

