class Employee extends Person {

    constructor(name, surname, clients) {
        super(name, surname);
        this.clients = clients;
    }

    toString() {
        return `Nome: ${this.name} ${this.surname}
Clienti: ${this.clients.length}
Guadagno totale: ${this.totalEarnings().toFixed(2)} €
Miglior cliente: 

${this.bestClient()}`
    }


    totalEarnings() {
        let clients = this.clients;
        let result = 0;
        for (let i = 0; i < clients.length; i++) {
            const element = clients[i].totalOrderPrice;
            result += element;
        }
        return result;
    }

    bestClient() {
        const clients = this.clients;
        let bestClient = clients[0];
        for (let i = 1; i < clients.length; i++) {
            if (clients[i].totalOrderPrice > clients[0].totalOrderPrice) {
                bestClient = clients[i];
            }
        }
        return bestClient.toString();
    }

    addClient(client) {
       this.clients.push(client)
    }

    removeClient(exClient) {
        let clients = this.clients;
        for (let i = 0; i < clients.length; i++) {
            if (exClient === clients[i]) {
                clients.splice(i, 1)
            }
        }
    }

}