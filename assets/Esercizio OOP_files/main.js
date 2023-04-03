const order1 = new Order('Cioccolato', 4, 1);
const order2 = new Order('Dentifricio', 2, 1.5);
const order3 = new Order('Pinzatrici', 10, 10);
const order4 = new Order('Riso', 5, 3.50);
const order5 = new Order('Sostanze stupefacenti', 2, 15);
const order6 = new Order('Pasta', 9, 2.99);

const client1 = new Client('Pietro', 'Viglino', 'Via Balbi 22', [order1, order2]);
const client2 = new Client('Geppo', 'Gambacorta', 'Via DeQua 999', [order3, order1]);
const client3 = new Client('Caccopazzo', 'Puntoit', 'Vico Vaco 34', [order4, order5]);
const client4 = new Client('Franconio', 'DeSorrisis', 'Via Sardegna 12', [order6, order2]);
const client5 = new Client('Giadalberto', 'Guardaipali', 'Via DeQua 9', [order6, order1]);

const employee1 = new Employee('Simone', 'Maccarone', [client1, client2])
const employee2 = new Employee('Gigi', 'Guantaim', [client4, client5])

const manager1 = new Manager('Valentina', 'Cherubini', [employee1, employee2])

console.log(employee2.toString())

console.log(manager1.toString())

