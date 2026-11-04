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
const addTwo = (a: number, b: number) : number => {
  /* Type 'string' is not assignable to type 'number */
  return a + b;
}

// Argument of type 'string' is not assignable to parameter of type 'number'

console.log(addTwo(10, 20));