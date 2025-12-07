function countEmployeesByAgeRange(employees) {
  let result = {
    "Under 25": 0,
    "25-30": 0,
    "Above 30": 0
  };

  employees.forEach(employee => {
    const empAge = employee.age
    empAge < 25 ? result["Under 25"] += 1 : 0;
    empAge >= 25 && empAge <= 30 ? result["25-30"] += 1 : 0;
    empAge > 30 ? result["Above 30"] += 1 : 0;
  });
  return result;
}

const employees = [
  { name: "Alice", age: 23 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 27 },
  { name: "David", age: 35 },
  { name: "Eve", age: 24 }
];

console.log(countEmployeesByAgeRange(employees));
// Expected Output: { "Under 25": 2, "25-30": 2, "Above 30": 1 }
