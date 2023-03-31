class Client extends Person{

    constructor(name, surname, address, orders){
        super(name, surname);
        this.address = address;
        this.orders = orders;
    }
    
    addOrder(order){
       return orders.push();
    }

    totalOrderPrice(){
        let totOrderPrice = 0;
        for (let i = 0; i < orders.length; i++) {
            totOrderPrice += orders[i];
            
        }
        return totOrderPrice;
    }

    toString(){
        return `${super.toString()}
Indirizzo: ${this.address}
Numero Ordini: ${this.orders.length}`

    }

} 