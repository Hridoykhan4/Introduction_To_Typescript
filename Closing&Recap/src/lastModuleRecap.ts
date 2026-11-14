// // class Employee {
// //   constructor(public name: string,public baseSalary: number) {
// //     this.name = name;
// //     this.baseSalary = baseSalary;
// //   }
// // }

// // const employee = new Employee("Jamal", 29);
// // const employee2 = new Employee("Mizan", 24000);

// // console.log(employee);


// class Employee {
// //   private name: string;
// //   salary: number;

//   constructor(protected name : string ,private _baseSalary: number) {
//     // this.name = name;
//     // this.salary = salary;
//   }

//   get baseSalary() : number {
//     return this._baseSalary
//   } 

//   set baseSalary (bonus: number) {
//     if(bonus < 0) {
//         throw new Error('Can not be less than 0')
//     }
//      this._baseSalary = this._baseSalary + bonus   
//   }

//   describe () : string {
//     return `${this.name} earns ${this._baseSalary} TK`
//   }

// }

// class Manager extends Employee {
// //   name: string;
// //   _baseSalary: number;
// //   teamCount: number

//   constructor(name: string, _baseSalary: number, private  teamCount: number) {
//     super(name, _baseSalary)
// }


//   describeManager(): string {
//       return `${this.name} earns ${this.baseSalary} TK`  
//   }  


// }



// const employee = new Employee('Mir', 20000)
// const manager = new Manager('Zaman', 120, 9)

// console.log(manager.describeManager());


// // employee.name = 'Kamil'



// class Employee {
//     constructor(public name: string, protected  _baseSalary: number) {

//     }

//     get baseSalary () : number {
//         return this._baseSalary
//     }

//     set baseSalary (newSalary : number ) {
//         this._baseSalary = newSalary
//     }

//     calculatePay(taxRate: number) : number {
//         return this.baseSalary - this.baseSalary * taxRate
//     }

// }

// class Manager extends Employee {
//     override calculatePay(): number {
//         return this._baseSalary + 12
//     }
// }


// class Developer extends Employee {
//     constructor(name : string, _baseSalary: number, public type: string) {
//         super(name, _baseSalary)
//     }
//    override  calculatePay(taxRate: number): number {
//         return (this._baseSalary + 2) - (this._baseSalary *taxRate)
//     }
// }


// const developer = new Developer('Jamal', 200, 'Frontend')
// console.log(developer.calculatePay(0.1));

// const employee = new Employee ('Mir', 10000)
// const manager = new Manager('Abul', 10)
// console.log(manager.calculatePay());

abstract class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    this.baseSalary = newSalary;
  }

  abstract calculatePay(): number;

  abstract getResources(): Array<string>;
  abstract registerEntryTime(): string;
}

class Manager extends Employee {
    calculatePay(): number {
        return this._baseSalary + 500
    }   

    registerEntryTime(): string {
        return '8:00 PM'
    }

    getResources(): Array<string> {
        return ['Laptop', 'Moneybag 0 balance']
    }
}

const manager = new Manager('Jamal', 1200)
console.log(manager.getResources());

// class Developer extends Employee {
//     calculatePay(): number {
//         return this.baseSalary + 12
//     }
// }