import express from "express"
import morgan from "morgan"
import rotas from "./routes.js"

const server = express()

server.use(rotas)
server.use(morgan('dev'))
server.use(express.json())

server.listen(3000, () => {
  console.log('Servidor está escutando em http://localhost:3000')
})