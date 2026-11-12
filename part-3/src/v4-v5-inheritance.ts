// Inheritance: A manager is an Employee with additional responsibility


class Employee {
    constructor(
        public name: string,
        protected _baseSalary: number
    ) {
    }

    get baseSalary () : number {
        return this._baseSalary
    }

    set baseSalary (newSalary: number)  {
        this._baseSalary = newSalary
    }

    describe () : string {
        return `${this.name} earns ${this.baseSalary}`
    }
}


class Manager extends Employee {
  // name: string;
  // baseSalary: number;
  // teamCount: number

  // Constructors for derived classes must contain a super call.
  constructor(
    name: string,
    _baseSalary: number,
    private teamCount: number,
  ) {
    // Super dewar shathe shathe o Employee er constructor k follow kortase
    // amra ei derived classmane child theke parent constructor k call korchi
    super(name, _baseSalary)
    // this.teamCount = teamCount
    // super(name, _baseSalary)
  }

  describeWork = () : string => {
    return `${this.name} manages ${this.teamCount}`
  }

  describeManager () : string {
    console.log(this.baseSalary);
    return `${this.name} earns ${this._baseSalary}`
  }
}

// const employee = new Employee('Jamal', 2000)
// employee.baseSalary = 300
// console.log(employee.describe( ));


// Must serial follow korte hbe, name, basic,
const manager = new Manager('Mizan', 12000, 20)
manager.baseSalary = 10000;
// console.log(manager);

console.log(manager.describeManager());



/*
super() কিওয়ার্ডের ব্যবহার
চাইল্ড ক্লাসে (Child Class) যখন নতুন কনস্ট্রাক্টর (Constructor) তৈরি করা হয়, তখন প্যারেন্ট ক্লাস (Parent Class)-এর প্রোপার্টিগুলোকে ইনিশিয়ালাইজ করার জন্য super() ফাংশন ব্যবহার করতে হয়।

উদাহরণস্বরূপ, প্যারেন্ট ক্লাস থেকে name এবং _baseSalary পাস করার জন্য super(name, _baseSalary) লেখা হয়েছে।
*/

