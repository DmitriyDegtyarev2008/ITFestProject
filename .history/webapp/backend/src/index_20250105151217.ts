import express from 'express'

const expressApp = express()
expressApp.get('/ping', (req, res) => {
    res.send('pong')
})    // endpoints
expressApp.listen(3000, () => {
    console.log('Listening at ')
})
