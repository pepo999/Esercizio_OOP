class Person{

    constructor(name, surname, dob){
        this.name = name;
        this.surname = surname;
        this.dob = dob;
    }

    toString(){
        return `Nome: ${this.name} ${this.surname}
Data di nascità: ${this.dob}`
    }

}