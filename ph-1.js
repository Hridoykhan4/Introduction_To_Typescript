// 
// const startTime = performance.now()
console.time('task')
for(let i = 0; i <= 500; i++) {
    console.log(i);
}
console.timeEnd('task')

// const endTime = performance.now()

// console.log(`This snippets take ${endTime} - ${startTime} = ${endTime - startTime} ms`);