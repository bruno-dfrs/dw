class Produto {
    static count = 0

    constructor(id, price, quantity) {
        this.id = id
        this.price = price
        this.quantity = quantity
        this.subtotal = this.getSubtotal()
    }

    getSubtotal() {
        return this.price * this.quantity
    }
}

const p1 = new Produto(1, 10.00, 2)
const p2 = new Produto(2, 10.00, 2)
const p3 = new Produto(3, 10.00, 2)
const p4 = new Produto(1, 10.00, 0)
let products = [p1, p2, p3, p4]

products = products.filter( (value) => value.subtotal != 0 )
console.log(products)