function min(numbers) {
    numbers.sort( (a,b) => a-b )
    return numbers[0]
}

function max(numbers) {
    numbers.sort( (a,b) => a-b )
    return numbers.at(-1)
}

// console.log(min([1,2,3,4,5,10,8]))
// console.log(max([1,2,3,4,5,10,8]))

function range(start = 0, end, interval = 1) {
    const numbers = []

    if (end === undefined) {
        end = start
        start = 0
    }

    for (let i = start; i < end; i += interval) {
        numbers.push(i)
    }

    return numbers
}

// console.log(range(10))
// console.log('------------------------')
// console.log(range(1, 11))
// console.log('------------------------')
// console.log(range(0, 30, 5))

function zip(...arrays) {
    const zipped = []
    const quantity_arrays = arrays.length // quantidade de elementos por array == quantidade de arrays
    let index_inside_array = 0

    while (index_inside_array < quantity_arrays) {
        let new_array = []

        for (const array of arrays) {
            let new_value = array[index_inside_array]
            new_array.push(new_value)

        } zipped.push(new_array); index_inside_array++
    }

    return zipped
}

// console.log(zip( ['moe', 'larry'], [30, 40] ))
// console.log('------------------------')
// console.log(zip( ['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false] ))

function uniq(numbers) {
    numbers.sort( (a,b) => a-b )
    const numbers_unique = []
    // const numbers_unique = new Set(numbers)

    for (const number of numbers) {
        if (!numbers_unique.includes(number)) {
            numbers_unique.push(number)
        }
    }

    return numbers_unique
}

// console.log(uniq([1, 2, 1, 4, 1, 3]))
// console.log(uniq([1, 2, 1, 3, 3]))

function sortNum(numbers) {
    return numbers.sort( (a,b) => a-b )
}

console.log(sortNum([1, 3, 2]))
console.log(sortNum([1, 2, 10, 3, 32]))