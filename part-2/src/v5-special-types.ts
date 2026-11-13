/* Top Types */

// No type check at all
// let x: any = [1, 2, 3];
// x = 1;
// ekhane kisu ekTa type hbe but ekhn jani na, jokhon use korbo tokhon ts amake error dekhabe

const something: unknown = "Hello World";
// something.length

/* Core Types */
// const arr : Array<string> = ['Jamal']

// Broader er khela, ekhane ami type disi unknown kin2 ami pore eTate value assign kortasi
// let something2 : unknown;
// const num : number = 10;

// something2 = num;

// Ekhn jodi ami void boshai, null dileo same
  let nothing: void;
  // const num : number = 10;
  // Type 'number' is not assignable to type 'void'
  // nothing = num;

  let something3: unknown;    
  something3 = nothing;
// Amra core types er moddhe void korte parbo na, void er moddhe core types korte parbo na kin2 ami top types er moddhe je kono kisu reassign korte parbo

/* Nullish Types , nullish  type itself ekTa type */
// Ami intentionally null rakhlam, user ashle boshbe apatoto null, typesafe kibhabe korbo, null value k type e anbo
// const currentUser = null

interface User {
  name: string;
}

// Core types e nullish k boshate hbe
// const currentUser: User = {
//     name: ""
// }

type loggedInUser = User | null;
const currentUser: loggedInUser = null;

/* Unit Type */
const greet = () => {
  console.log("Hello World");
  // return 'Hi'
};

// something3 = greet() No issue here at all

// Jodi bokachodar moto union kori (string | void) tobe amra tw kisu pacchi na
// const greetings: string = greet()

/* Sub Type of unit type */

const anotherGreet = (): undefined => {
  // console.log('Hello World');
  return undefined;
};

const greetings = anotherGreet();
// Jekhane void hote pare shekhane amra undefined assign korte pari

/* Bottom Type , never type er moddhe kono kisu assign korte parbo na, jeshob func theke error throw kori oishob jaygay never use kori amra*/

// Type '32' is not assignable to type 'never'
// let neverHappening : never =  32


// const getError: (msg: string) => never, ts ekhane jane throw error mane etar type never
const getError = (msg: string) => {
  throw new Error(msg);
};

// ami x er type undefined, string, etc ja kori assign korte parchi, powerless              
// const x : string = getError(1)






/* Hierarchy */

/* 
      

*/
type Status = 'Pending' | "success"

let someStatus : string;

const status: Status = 'Pending';

someStatus = status;

console.log(someStatus);