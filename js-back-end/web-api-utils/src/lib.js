export { textUtil, numberUtil }

function textUtil(op, input) {
  switch (op) {
    case "lowercase":
      return input.toLowerCase()
    
    case "uppercase":
      return input.toUpperCase()
    
      default:
        return null
  }
}

function numberUtil(op, numbers) {
  switch (op) {
    case "minimum":
      return Math.min(...numbers)
    
    case "maximum":
      return Math.max(...numbers)

    default:
      return null
  }
}
