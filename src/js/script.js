const p1 = {
    name: "Computador",
    price: 2000.0,
    quantity: 3
}

function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.total = function() {
    return this.price * this.quantity;
}

Product.prototype.add = function(amount) {
    this.quantity += amount;
}

Product.prototype.remove = function(amount) {
    if (quantity >= amount) {
        this.quantity -= amount;
    }
}

Product.prototype.label = function() {
    return "Dados: " + this.name + ", " + this.price;
}

const p2 = new Product("Monitor", 800.0, 2);
