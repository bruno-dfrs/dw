import { Router } from "express"

function textUtil(op, input) {
  if (op === 'lowercase') {
    return input.toLowerCase()

  } else if (op === 'uppercase') {
    return input.toUpperCase()

  } else {
    return null
  }
}

function numberUtil(op, numbers) {
  if (op === 'minimum') {
    return Math.min(...numbers)

  } else if (op === 'maximum') {
    return Math.max(...numbers)

  } else {
    return null
  }
}

const routes = Router()

// Text Utils
routes.post(`/text/:op`, (req, res) => { // op == lowercase or uppercase
  const op = req.params.op
  const input = req.body.input

  const response_json = {
    "action": op,
    "input": input,
    "output": textUtil(op, input)
  }

  return res.json(response_json)
})

// Number Utils
routes.get(`/number/:op`, (req, res) => { // op == mininum or maximum
  const op = req.params.op
  const numbers = req.query.input.split(',')

  const response_json = {
    "action": op,
    "input": `${numbers}`,
    "output": `${numberUtil(op, numbers)}`
  }

  return res.json(response_json)
})

export default routes
