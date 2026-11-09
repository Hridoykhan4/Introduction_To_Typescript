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
type Bird = {fly: () => void}
type Fish = {swim: () => void}

const move = (animal : Bird | Fish) => {
    
}