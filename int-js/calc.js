import { sum } from "../soma/soma.js"
export const sub = (a, b) => a-b
export const mul = (a, b) => a*b
export const div = (a, b) => a/b

export function calc(a, b, op) { // op = {sum, sub, mul, div}
    return op(a, b)
}
