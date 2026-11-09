// some caveat of Type Guard
//  const printAll = (x: string | string[] | null) => {
//     if(x && typeof x === 'object') { 
//         for (let str of x) {
//             console.log(str);
//         }
//     }
//     else if (typeof x === 'string') {
//         console.log(x);
//     }
//     else {
//         console.log('Value is null');
//     }
//  }


// Equality
   
// same kahini equality teo
// const compare = (x : string | number , y : number | boolean) => {
//     if(x === y) {
//         console.log(x + y);
//     } 
// }

// compare(10, 10)

// Inequality

//  const printAll = (x: string | string[] | null) => {
//     if(x !== null) {
//         if(typeof x === 'object') {
//             for (const element of x) {
//                 console.log(element);
//             }
//             return 
//         }
//         console.log(x);
//         return
//     }
//     console.log('Empty Arr');
//  }


//  printAll(['Ali', 'sali'])
//  printAll('alibaba')
//  printAll(null)


// In operator
// type Bird = {fly: () => void}
// type Fish = {swim: () => void}

// const move = (animal : Bird | Fish) => {
//   /* Property 'fly' does not exist on type 'Bird | Fish'.
//   Property 'fly' does not exist on type 'Fish' */
// //   animal.fly();

//     if ('fly' in animal) {
//         animal.fly()
//         return
//     }
//     animal.swim()
// }

// move({swim() {
//     console.log('Swimming');
// }})

//* instanceof check
/* 
       ekTa object class er instance kina   
       date Date contructor theke banano hoise 
       date Error theke banano hy nai
*/
// const date = new Date();
// const err = new Error('Something went wrong')
// console.log(date instanceof Date);
// console.log(err instanceof Error);

// const showDate = (x: Date | string) => {
//     if(x instanceof Date) {
//         console.log(x.toISOString());
//         return
//     }
//     const date = new Date(x)
//     console.log(date.toISOString());
// }

// showDate("12-16-1971");



// Discriminated Interface
interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    sideLength: number 
}

const getArea = (shape : Circle | Square) => {
    if(shape.kind === 'circle') {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLength);
    }
}

getArea({radius: 11, kind: 'circle'})