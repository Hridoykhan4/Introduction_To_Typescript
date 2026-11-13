// * Literal Type

// ei pending k ts ekTa type hishebe treat kortase. 

/* 
Literal type banai ashole luv Ta ki? shuvidha hcche amra onek shomoy config create kori oi config gulate amra chai j ei value Ta specifically ei value Tae hbe 

ei literal type k amra union er shathe combine korte pari  
*/
type Status = 'pending';

const status: Status = 'pending'

console.log(status);
// * Basic Union
/* duiTa type ekshathe mix korte pari
narrowing r type aliases
*/

// type Identity = string | number;

// const id : Identity = 101


// * Literal Union
type Role = 'user' | 'admin' | 'manager';

// literal type + union er shathe mismatch kore besh kichu powerful identifier create korte pari 

const userRole :  Role = 'admin'

// * Object Union

/* 
Object er type e o amra union korte pari

amar duita alada alada type er object ase user either jekono object er hote pare, shei object er ki ki data type ase oiTar upor base kore  amader object er shape Ta ki hbe she jinishTao amaderk typescript determine kore dicche & also providing type safety
*/
type Admin = { id: number, role: 'admin', privileges: string[] }
type Member = {id: number, role: 'member', plans: string[]};    

type User = Admin  | Member;

// ami role member korle plans e dite parbo privileges dite parbo na
const user : User = {id: 123, role: 'member', plans: ['swimming', 'killing', 'def'], }

