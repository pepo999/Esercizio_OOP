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

//METODI STATICI DELLE CLASSI

console.log(Math.sqrt(16)); //4

//MATH è una classe statica: le sue funzione sono statiche, cioè non dipendono da nessuna proprietà che la classe ha
//riconosciamo subito una funziona statica perchè non ha il this.
//una classe che ha solo metodi statici è una classe statica

const numbers = [3, 4, 5, 9]

console.log(Utility.filter(numbers, function(element){return element > 4}))   //versione normale
console.log(Utility.filter(numbers, (element) => element > 4))      //versione lambda

function isEven(element) {return element % 2 === 0}
console.log(Utility.filter(numbers, isEven))  //usando una funzione creata esternamente

function multiplyBy3(element){
    return element * 3;
}
console.log(Utility.map(numbers, function(element){return element *3}))
console.log(Utility.map(numbers,multiplyBy3))
console.log(Utility.map(numbers, (element) => element * 3))

console.log(Utility.reduce(numbers, (previous, current) => previous + current))
function sum(a, b){
return a + b
}
console.log(Utility.reduce(numbers, sum, 0))

//fare filter con la reduce: (PORCATA)

console.log(Utility.reduce(numbers, (accumulator, current) => {
if(current % 2 === 0) {
    accumulator.push(current);
} return accumulator;
}, []))


