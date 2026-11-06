// Interface is generally connected to objects
//  Type alias is more connected to literals, union, tuples, primitives

type id = number | string;

//! interface id = number
//! interface id {

// }

type Role = 'admin' | 'manager' | 'recruiter';
// Must use type, can't be done by interface
//! interface "admin"  | 'member'

interface User {
    name: string,
    id: id, // type id abar interface e use kora jabe
    // role: Role
    // shorashori union bananor chance nai interface e 
    role: 'admin' | 'manager' | 'seeker'
}
 
const user : User = {
    name: 'Salam',
    id: '121',
    role: 'manager'
}



/* Interface */

/* 
 Interface k extend kora jay
 inheritance concept
*/

interface Animal {
    species: string;
}

interface Cat extends Animal {
  breed: string;
}
// animal e ja ache ami cat e niye ashbo, jeTa abar type alias e kora jay na

const cat: Cat = {
    breed: "Persian",
    species: 'cat'
}

// console.log(cat);

// type er moddhe amra kibhabe extend korbo, union er ulta kaj korbo ekhane 
type Vehicle = {
    brand: string;   
}

// Ekhane amra must ensure korbo j ekhane brand thaktei hbe "Vehicle &" diye
type Car = Vehicle & {
    model: string
}

const car: Car  = {
    model: 'Toyota',
    brand: "BMW" 
}
console.log(car);

/* 

    -----------------
    Interface e amra extend korbo r type alias e amra use korbo & (intersection ) "&" symbol used to perform intersection

*/


/* ending */

interface IEmployee {
    name: string
}

interface IEmployee {
    id: number
}

// duita interface same naam e ase taw merge hoye gese , but type e hy na
const employee : IEmployee  = {
    name: 'Salam',
    id: 101,
}

// Union er jnne amra type alias use korbo must must must
// This is not valid
// type TEmployee = {
//     name: string
// }

// type TEmployee = {
//     id: 101
// }