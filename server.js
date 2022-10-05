const express = require('express')
const server = express()
const port = process.env.PORT || 8080;

server.use(express.json())
server.use('/', require('./backend/server/route/productRoute'))
server.use('/', require('./backend/server/route/categoryRoute'))
server.use('/', require('./backend/server/route/customerRoute'))
server.use('/', require('./backend/server/route/addressRoute'))
server.use('/', require('./backend/server/route/purchaseRoute'))
server.use('/', require('./backend/server/route/purchaseStatusRoute'))

server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})