function sum(numbers) {
    return numbers.reduce( (acc, value) => acc + value, 0 )
}

console.log(sum([1,2,3]))
console.log(sum([2,2,2]))
console.log(sum([1,2,3,4,5,6]))

function sumOdds(numbers) {
    const Odds = numbers.filter( (value) => value % 2 != 0 )
    return Odds.reduce( (acc, value) => acc + value, 0)
}

console.log(sumOdds([1,2,3]))
console.log(sumOdds([2,2,2]))
console.log(sumOdds([1,2,3,4,5,6]))

function product(numbers) {
    return numbers.reduce( (acc, value) => acc * value, 1 )
}

console.log(product([1,2,3]))
console.log(product([2,2,2]))
console.log(product([1,2,3,4,5,6]))