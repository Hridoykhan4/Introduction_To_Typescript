// let myStr: string = "Programming Hero";
// myStr = 121 Type 'number' is not assignable to type 'string'.
// let myNumber: number = 12;
// let myBool: boolean = true;
// let mySymbol: symbol = Symbol("💗");
/* টাইপস্ক্রিপ্ট বা জাভাস্ক্রিপ্টকে বোঝানোর জন্য যে এটি একটি BigInt, আপনাকে সংখ্যার একদম শেষে একটি ছোট হাতের বা বড় হাতের n যুক্ত করতে হবে। অথবা BigInt() ফাংশন ব্যবহার করতে হবে।
BigInt() গ্লোবাল ফাংশনটি ব্যবহার করে স্ট্রিং হিসেবে সংখ্যাটি পাস করুন।
*/
// let myBigInt: bigint = 2122312342423423432423432432433123n
// console.log(myStr);

// Function er khettre ki return korbe amra bole dite parbo
// eta j number return krbe ts sheta predict korte pare, taw amra dilam
const addTwo = (a: number, b: number): number => {
  /* Type 'string' is not assignable to type 'number */
  return a + b;
};

// Argument of type 'string' is not assignable to parameter of type 'number'

// console.log(addTwo(10, 20));

// Array & Tuple an readonly modifier

// const arr : number[]  =  ['Programming', 2, false]
const arr: number[] = [1, 2, 4];

// Argument of type 'string' is not assignable to parameter of type 'number'.
// arr.push('arr')

// const numArr : string[] = ['jamal', 'khan']

// Generic --> interface
const arr2: Array<string> = ["Jamal"];

// ekta array er moddhe multiple data type rakhte chaile union use korbo

// Tuple is also an array in runtime, jar specific length thakbe (fix) , kon position e kon type er data boshebe eTao mention thakbe

const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125];

//  readonly thakar karone arr er upor kono operation kora jabe na, kinda fixed, kew change korte parbe na,  readonly modifier diye disi amra
// dhakaLatLong.pop(10)

// Function optional, default, rest parameter
// Thakteo pare abar nao pare I mean optional hoile just ? mark use korbo
const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) return firstName;
  return firstName + " " + lastName;
};

// EKhane ami ekTa argument dile ts raaag korbe, bolbe 2 Ta na diye 1 Ta keno dili

// console.log(concatName("Hridoy"));


// Ei function er kono return nai so return type is void

// const greetings = (greeting: string = 'Hello', fullName: string) : void => {
//     console.log(greeting + ' ' + fullName);
// }


// greetings( undefined , 'Salam')


// Typesctipt jehetu implicitly bujhte pare "Hello" ei default Ta string so we don't need to mention the type
// const greetings = (fullname: string, greeting: string = 'Hello') : void => {
//     console.log(greeting + ' ' + fullname);
// }

// greetings('Jamal')







/* Rest parameters */
// const sum = (...numbers : number[]) => {
//     return numbers.reduce((total, n) => total + n, 0 )
// }

// const total = sum(2,3,4,5)
// console.log(total);

// const logUserAction = (...args: [string, number, boolean]) => {
//       const [ name , age, isMarried] = args;
//       console.log(name + ' is ' + age + ' years old . ', isMarried );      
// }

// logUserAction('jamal', 12, true)





// The concept of tuple has been used here
// const logUserAction = (...args: [name: string, age:  number, isMarried:  boolean]) => {
//       const [ name , age, isMarried] = args;
//       console.log(name + " is " + age + " years old . ", isMarried );      
// }

// logUserAction('jamal', 12, true)



// Object Type, type alias & Interface

// Type alias mane holo amra nijeder moto ekTa type banate pari
type User = {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: readonly [string, number];
}; 


// const user : {
//   name: string;
//   age: number;
//   isActive: boolean;
//   action: () => void;
//   badges: readonly [string, number]
// } = {
//   name: 'Mir',
//   age: 12,
//   isActive: true,
//   action: () => console.log('Hi'),
//   badges:  ['Kamal', 3]
// }

const user : User = {
  name: 'Mir',
  age: 12,
  isActive: true,
  action: () => console.log('Hi'),
  badges:  ['Kamal', 3]
}
// Property 'push' does not exist on type 'readonly [string, number]'.
// user.badges.push('Hi')

// user.email = 'mir@gmail.com'

// const user2: User = {
//   name: "Salam",
//   age: 12,
//   isActive: true,
//   action: () => console.log("Hi"),
//   badges: ["Kamal", 3],
// };

// Interface r type alias kachakachi,  type alias interface ei 2 Tae object er jnne use kora jay, interface using is recommended, interface extend kora jay, duplication kora jay
interface IUser {
  //   name: string;
  //   age: number;
  //   isActive: boolean;
  //   action: () => void;
  //   badges: readonly [string, number]
} 





// ekTa difference between interface & type alias

// it is called separation of concern
type Address =  {
    streetName: string,
    holdingNumber: number
  }

type UserName = string;

type TUser = {
  name: UserName;
  age: number;

  address: Address
}


// Ctrl + space diyei hint pawa jay, khela shesh.......
const newUser : TUser = {
  name: 'Jamal',
  age: 12,
  address: {
    streetName: 'Moghbazar',
    holdingNumber: 111
  }
}

// 'string' only refers to a type, but is being used as a value here.ts
// interface Iuser string