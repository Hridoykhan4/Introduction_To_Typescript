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

interface Cat {
    
}