function validateStudentsData(students) {
  for (let student of students) {
    if (typeof student.name !== "string" && 
        student.name === "" && 
        student.age <= 0 && 
        student.score < 0 && 
        student.score > 100) {
      return true;
    }
  }

  return false;
}

const students = [
  { name: "Andi", age: 20, score: 85 },
  { name: "Budi", age: -5, score: 90 }, // Invalid
  { name: "", age: 22, score: 75 }, // Invalid
  { name: "Citra", age: 19, score: 110 } // Invalid
];

console.log(validateStudentsData(students));
// Expected Output: false
