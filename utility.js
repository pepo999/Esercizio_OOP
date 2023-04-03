class Utility{
    //proviamo a creare map, filter e reduce come funzione statiche, se non esistessero già
//statiche significa che sono funzioni che non ha bisogno che la classe venga instanziata per essere lanciata
static filter(array, func){
let tempArray = [];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(func(element)) {
        tempArray.push(element);
    }
}
return tempArray;
}

static map(array, func){
let resultArray = [];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const newElement = func(element);
    resultArray.push(newElement)
}
return resultArray;
}

static reduce(array, func, start){
    let accumulator;
    let startIndex;
   if(start !== undefined) {accumulator = start; startIndex = 0} else {accumulator = array[0]; startIndex = 1}
    for (let i = startIndex; i < array.length; i++) {
        const current = array[i];
        accumulator = func(accumulator, current);
    }
    return accumulator;
}

}