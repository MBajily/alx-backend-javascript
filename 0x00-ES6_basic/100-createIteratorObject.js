export default function createIteratorObject(report) {
  let allEmployees = [];

  // Combine employees from all departments into one array
  for (const department of Object.values(report.allEmployees)) {
    allEmployees = allEmployees.concat(department);
  }

  // Return an iterator for the combined array of employees
  return allEmployees[Symbol.iterator]();
}
