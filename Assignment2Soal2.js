function groupByDepartment() {
  let Hr = [];
  let Engineering = [];
  let Marketing = [];
  let output = {
    HR: Hr,
    Engineering: Engineering,
    Marketing: Marketing
  };

  employees.forEach((element) => {
    if (element.department == "HR") {
      Hr.push(element.name);
    } else if (element.department == "Engineering") {
      Engineering.push(element.name);
    } else if (element.department == "Marketing") {
      Marketing.push(element.name);
    } else {
      return;
    }
  });
  console.log(output);
}

// Refactor Version By AI Co-Pilot
// function groupByDepartment() {
//   let output = {};

//   employees.forEach((element) => {
//     // If the department doesn't exist yet, create an empty array for it
//     if (!output[element.department]) {
//       output[element.department] = [];
//     }
//     // Push the employee's name into the correct department array
//     output[element.department].push(element.name);
//   });

//   return output;
// }

const employees = [
  { name: "Alice", age: 28, department: "HR" },
  { name: "Bob", age: 34, department: "Engineering" },
  { name: "Charlie", age: 25, department: "Engineering" },
  { name: "David", age: 42, department: "HR" },
  { name: "Eve", age: 22, department: "Marketing" },
];

const groupedEmployees = groupByDepartment();

// Output:
// {
//   HR: ['Alice', 'David'],
//   Engineering: ['Bob', 'Charlie'],
//   Marketing: ['Eve']
// }
