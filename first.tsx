type Student = {
  name: string;
  age: number;
  isLearning: boolean;
};

const student: Student = {
  name: "Hridoy",
  age: 20,
  isLearning: true,
};

const stu: Student = {
  name: "HH",
  age: 11,
  isLearning: false,
};

function greetStudent(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
}

const scores: number[] = [85, 90, 95];
const totalScore: number = scores.reduce((total, score) => total + score, 0);

console.log(greetStudent(student.name));
console.log(`Age: ${student.age}`);
console.log(`Learning: ${student.isLearning}`);
console.log(`Total score: ${totalScore}`);
