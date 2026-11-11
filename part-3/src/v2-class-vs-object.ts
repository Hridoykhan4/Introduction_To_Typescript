// interface Employee {
//     name: string;
//     salary: number
// }

// const employee : Employee = {
//     name: "Jamal",
//     salary: 22000
// }

// const employee2 : Employee = {
//     name: "Mizan",
//     salary: 25000,
//     // hobby: "swimming"
// }

// Amra dhore dhore object banabo na, we swill make a blueprint jeTa diye amra object banate parbo

class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    // this keyword Ta ei class kei mean kortese
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

// Employee class diyei amra buvinno object banate parbo
// jekono class use korte must "new" keyword ditei hbe
const employee = new Employee("Mizan", 180000);
const employee2 = new Employee("Salam", 120000);

// Constructor. ekTa class er moddhe special method banate hbe jar kaj hcche amader object Ta k construct kore dewa, object er je initial state gula ase oigula set kore dewa

// console.log(employee, employee2);
// amader chacch Ta hoilo employee, amra chaach diye piTha banailam 2 Ta employee .
// object duita oi Employee class thekei hcche
console.log(employee instanceof Employee);
// ei object gula amra class diye banaisi eTa verify korlam
console.log(employee2 instanceof Employee);
