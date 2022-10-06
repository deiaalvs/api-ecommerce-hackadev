const express = require('express')
const server = express()
const port = process.env.PORT || 8080;

server.use(express.json())
// server.use('/', require('./server/route/addressRoute'))
// server.use('/', require('./server/route/categoryRoute'))
// server.use('/', require('./server/route/customerRoute'))
// server.use('/', require('./server/route/addressRoute'))
// server.use('/', require('./server/route/purchaseRoute'))

server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})