"use strict";
const student = {
    name: "Hridoy",
    age: 20,
    isLearning: true,
};
function greetStudent(name) {
    return `Hello, ${name}! Welcome to TypeScript.`;
}
const scores = [85, 90, 95];
const totalScore = scores.reduce((total, score) => total + score, 0);
console.log(greetStudent(student.name));
console.log(`Age: ${student.age}`);
console.log(`Learning: ${student.isLearning}`);
console.log(`Total score: ${totalScore}`);
