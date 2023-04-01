class Client extends Person{

    constructor(name, surname, address, orders){
        super(name, surname);
        this.address = address;
        this.orders = orders;
    }
    
    addOrder(order){
       return this.orders.push(order);
    }

    totalOrderPrice(){
        let totalPrice = 0;
        for (let i = 0; i < this.orders.length; i++) {
            const element = this.orders[i];
            totalPrice += element.getTotalPrice();
        }
        return totalPrice;
    }

    toString(){
        return `${super.toString()}
Indirizzo: ${this.address}
Numero Ordini: ${this.orders.length}
Spesa Totale: ${this.totalOrderPrice().toFixed(2)} € 
Lista Ordini: 
--------------------------------------------------------------------------
${this.orders}`
    }

} 