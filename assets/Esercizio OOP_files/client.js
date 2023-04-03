class Client extends Person {

    constructor(name, surname, address, orders = []) { //essendo il costruttore una funzione si comporta come tale. in questo ex abbiamo dato un default a orders
        super(name, surname);
        this.address = address;
        this.orders = orders;
    }

    addOrder(newOrder) {
        this.orders.push(newOrder);
    }

    get totalOrderPrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.orders.length; i++) {
            const element = this.orders[i];
            totalPrice += element.getTotalPrice();
        }
        return totalPrice;
    }

    totalOrderPrice2() { //esempio di reduce, fa la stessa cosa della funzione totalOrderPrice
        return this.orders.reduce((previous, current) => {
            previous += current.getTotalPrice();
            return previous
        }, 0)
    }

    get multipleOrdersInString() {
        let stringRes = '';
        for (let i = 0; i < this.orders.length; i++) {
            const element = this.orders[i].toString();
            stringRes += element + '\n' + '----------------------------' + '\n'
        }
        return stringRes;
    }

    toString() {
        return `${super.toString()}
Indirizzo: ${this.address}
Numero Ordini: ${this.orders.length}
Spesa Totale: ${this.totalOrderPrice.toFixed(2)} € 
Lista Ordini: 
----------------------------
${this.multipleOrdersInString}`
    }

} 