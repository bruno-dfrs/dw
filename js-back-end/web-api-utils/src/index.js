import express from "express"
import morgan from "morgan"
import routes from "./routes.js"

const server = express()

server.use(express.json()) // IMPORTANTE: deve vir ANTES DAS ROTAS!!!!!
server.use(morgan('dev')) // Carregar ANTES DAS ROTAS, do contrário Morgan não registra os logs!!!
server.use('/util', routes)

server.listen(3000, () => {
  console.log('Servidor está escutando em http://localhost:3000')
})
