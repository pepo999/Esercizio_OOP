const order1 = new Order('Cioccolato', 4, 1);
const order2 = new Order('Dentifricio', 2, 1.5);
const order3 = new Order('Pinzatrici', 10, 10);
const client1 = new Client('Pietro', 'Viglino', 'Via Balbi 22', [order1, order2]);

console.log(client1.toString());

//client1.addOrder(order3);

console.log(client1.toString());

const employee1 = new Employee('Simone', 'Maccarone', [client1]);

console.log(employee1.toString());

const order4 = new Order('Pinzatrici', 10, 10);

console.log(order1.getTotalPrice());

console.log(client1.toString());

const order5 = new Order('Riso', 5, 3.50);

client1.addOrder(order5);
console.log(client1.toString());