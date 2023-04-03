class Person{

    constructor(name, surname, dob = 'data di nascita non inserita'){
        this.name = name;
        this.surname = surname;
        this.dob = dob;
    }

    toString(){
        return `Nome: ${this.name} ${this.surname}
Data di nascita: ${this.dob}`
    }

}