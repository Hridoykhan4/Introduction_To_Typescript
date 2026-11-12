//* Abstraction: every employee must define how their pay is calculated
// class gular jnne ekTa contract create kora, ei ei jinish must ditei hbe
// oi class initiate korte parbo na, object instance create korte parbo na
// onno class jeTa inherit korbe jeno baddho hy implement korte

 abstract class Employee {
    constructor(public name: string, protected _baseSalary: number) {

    }   

    get baseSalary () : number {
       return  this._baseSalary 
    }

    setBaseSalary (newSalary: number) {
        if(newSalary < 0) {
            throw new Error('Salary can not be negative')
        }
        this._baseSalary = newSalary
    }


    // Func body amra implement korbo na, must implement korte hbe
    abstract calculatePay() : number 

    abstract getResources() : Array<string>
    abstract registerEntryTime() : string
}


// Manager is non abstract class
// Non-abstract class 'Manager' is missing implementations for the following members of 'Employee': 'getResources', 'registerEntryTime'
// So abstract class hcche kind of contract, subclass enforce hcche
class Manager extends Employee {
    calculatePay(): number {
        return this._baseSalary + 20
    }
}


class Developer extends Employee {
    calculatePay(): number {
        return this._baseSalary = 3
    }
}

// const manager = new Manager('Mahim', 2000)


//! Cannot create an instance of an abstract class.ts(2511), missing in JS, private o missing

// initiate korte na parle use kemne krbo, amra developer k force korsi tar nijer motw class      create kore nite
// const employee = new Employee('')



