/* 
TypeScript-এ Polymorphism (পলিমরফিজম) শব্দটির সহজ অর্থ হলো "বহুরূপী" বা "একই জিনিসের ভিন্ন ভিন্ন রূপ"। অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিংয়ে (OOP) এর মানে হলো—ভিন্ন ভিন্ন ক্লাস একই নামের মেথড ব্যবহার করবে, কিন্তু তাদের কাজের ধরন (Logic) আলাদা হবে।

TypeScript-এ এটি মূলত Method Overriding (মেথড ওভাররাইডিং)-এর মাধ্যমে করা হয়
*/


class Employee {
    constructor(
        public name: string,
        protected _baseSalary: number
    )
    {}

    get baseSalary () : number {
        return this._baseSalary
    }

    set baseSalary (newSalary : number) {
        this._baseSalary = newSalary
    }

    calculatePay (taxRate: number) {
        return this.baseSalary - this.baseSalary * taxRate
    }

}

class Manager extends Employee {
    override calculatePay(): number {
        return this.baseSalary + 5000
    }
}

class Developer extends Employee {
    constructor(
        public name: string,
        protected _baseSalary: number,
        public type: string
    ){
        super(name, _baseSalary)
    }
    calculatePay(taxRate: number): number {
        return (this.baseSalary + 2) - (this._baseSalary * taxRate)
    }
}

const employee = new Employee('Mir', 200)

const manager = new Manager('Jamal', 20)

const developer = new Developer('Salam', 300, 'Frontend')
console.log(developer);

// console.log(employee.calculatePay(0.1));
// console.log(manager.calculatePay());

console.log(developer.calculatePay(0.1));

// Polymorphism dui bhabe kroa jay, ekta override (ts support kore na), overload(support kore ts)