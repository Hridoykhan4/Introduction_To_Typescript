// // // 
// // // const startTime = performance.now()
// // console.time('task')
// // for(let i = 0; i <= 500; i++) {
// //     console.log(i);
// // }
// // console.timeEnd('task')

// // // const endTime = performance.now()

// // // console.log(`This snippets take ${endTime} - ${startTime} = ${endTime - startTime} ms`);

// let firstArr = [];
// let secondArr = [];

// for(let i = 0; i < 600000; i++) {
//     if (i <= 300000) {
//         firstArr.push(i)
//     }
//     secondArr.push(i)
// }

// console.time('map1');
// const firstUserList = firstArr.map(n => ({usersId: n}))
// console.timeEnd('map1')

// console.time('map2');
// const secondUserList = secondArr.map(n => ({usersId: n}))
// console.timeEnd('map2')



// To removing duplicate new set is BOSS, set er moddhe array operation kora haram so amra set k array te convert kori
const arr = [1,2,3,3,4]
const set = new Set(arr);
// const makeItArr = Array.from(set)
// console.log(makeItArr);

// console.log(set.has(1)); includes  
// console.log(set.delete(3)); removing

// set.add('applex')
// set.add('appley')
// set.add('applez')
// set.add('applez')
// console.log(set);
// console.log(set.size);


