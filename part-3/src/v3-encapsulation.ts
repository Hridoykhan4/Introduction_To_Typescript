// Encapsulation: Protect a state & change it through methods

// * Access Modifier dey.
// Public
// Private strict  (class er baire property access kora jane na)
// Protected (এটি private-এর মতোই সুরক্ষিত, তবে একটি বিশেষ ছাড় আছে। যে ক্লাসে এটি তৈরি হয়েছে সেখানে তো ব্যবহার করা যাবেই, পাশাপাশি এই ক্লাসকে উত্তরাধিকার সূত্রে যারা পাবে (Child Class বা Sub-class), তারাও এটি ব্যবহার করতে পারবে। কিন্তু বাইরের কেউ পারবে না )
// readonly access modifier

// class Employee {
//   name: string;
//   #salary: number;

//   constructor(inputName: string, inputBaseSalary: number) {
//     this.name = inputName;
//     this.#salary = inputBaseSalary;
//   }
// }

// const employee = new Employee('Mir', 20000)

// // Amake etak protect korte hbe, protect korte hbe. Ami controlled korbo eTak.
// // JS protect korte dey na, js e ei private er concept nai. so ancient js dev ra _ mark kortw just bujhanor jnne 

// // Property '#salary' is not accessible outside class 'Employee' because it has a private identifier.ts(18013)
// employee.#salary = -500

// class Employee {
//   name: string;
//   public readonly salary: number;

//   constructor(inputName: string, inputBaseSalary: number) {
//     this.name = inputName;
//     this.salary = inputBaseSalary;
//   }
// }


// class Employee {
//   name: string;
//   private salary: number;

//   constructor(inputName: string, inputBaseSalary: number) {
//     this.name = inputName;
//     this.salary = inputBaseSalary;
//   }
// }

// const employee = new Employee('Mir', 20000)

// Property 'salary' is private and only accessible within class 'Employee'. 
// employee.salary = 2000
// read write kisui kora jabe na
// console.log(employee.salary);

// Amake etak protect korte hbe, protect korte hbe. Ami controlled korbo eTak.
// JS protect korte dey na, js e ei private er concept nai. so ancient js dev ra _ mark kortw just bujhanor jnne 

// Property '#salary' is not accessible outside class 'Employee' because it has a private identifier.ts(18013)
// employee.salary = -500

// public readonly dile read korte parbo
// console.log(employee.salary);



// set get

// Shorthand kori class er property k, baire ekbar declare kore abar this diye constructor er bhetore dewar kono mane nai!
// eTa typescript er shorthand
class Employee  {
    constructor(
        public name: string, 
        private _baseSalary: number
    ) {
        // this.name = name;
        // this._baseSalary = _baseSalary
    }

    get baseSalary() : number {
            return this._baseSalary
    }  

    get salaryWithBonus() : number {
        return this._baseSalary + 1000
    }

    // get set na koreo kora jay shekkhetre call korte hyi9

    getSalaryWithBonus () : number {
        return this._baseSalary + 5000
    }

    setSalaryWithBonus (bonus : number) : number {
        return this._baseSalary + bonus
    }

    set baseSalary (newSalary : number)  {
        if(newSalary < 0) {
            throw new Error('Salary can not be negative value')
        }
         this._baseSalary = newSalary
    }

}

const employee = new Employee('KAMAL', 22000)

employee.baseSalary = 100 

// const newTotal = employee.setSalaryWithBonus(300)
// console.log(newTotal);
console.log(employee, employee.salaryWithBonus);

// controlled method er maddhome amra state k modify kortasi

/* 
Encapsulation (ইনক্যাপসুলেশন) হলো অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP)-এর একটি অন্যতম মূল নীতি, যার মাধ্যমে ক্লাসের ভেতরের ডাটা বা প্রোপার্টিজ বাইরে থেকে সরাসরি অ্যাক্সেস করা বন্ধ করা হয় এবং একটি নির্দিষ্ট মেথডের মাধ্যমে তা নিয়ন্ত্রণ করা হয়। সহজ কথায়, এটি আপনার কোডের ডাটাকে একটি "ক্যাপসুল"-এর মতো আটকে সুরক্ষিত রাখে, যাতে বাইরের কেউ ভুলবশত বা ইচ্ছাকৃতভাবে ডাটা নষ্ট বা পরিবর্তন করতে না পারে।
*/