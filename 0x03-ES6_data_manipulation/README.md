# ES6 Data Manipulation

This project contains tasks focused on ES6 data manipulation techniques in JavaScript, including working with arrays, typed arrays, and sets.

## Tasks

### 0. Basic list of objects
* Create a function named `getListStudents` that returns an array of objects.
* Each object has three attributes: `id` (Number), `firstName` (String), and `location` (String).
* The array contains three students:
  * Guillaume, id: 1, in San Francisco
  * James, id: 2, in Columbia
  * Serena, id: 5, in San Francisco

### 1. More mapping
* Create a function `getListStudentIds` that returns an array of ids from a list of object.
* Function accepts one argument which is an array of objects (same format as `getListStudents`).
* If argument is not an array, return an empty array.
* Must use the `map` function.

### 2. Filter
* Create a function `getStudentsByLocation` that returns an array of objects located in a specific city.
* Takes a list of students (from `getListStudents`) and a `city` (string) as parameters.
* Must use the `filter` function.

### 3. Reduce
* Create a function `getStudentIdsSum` that returns the sum of all student ids.
* Accepts a list of students (from `getListStudents`) as a parameter.
* Must use the `reduce` function.

### 4. Combine
* Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.
* Accepts three parameters:
  * A list of students (from `getListStudents`)
  * A city (String)
  * An array of grade objects (with `studentId` and `grade` properties)
* If a student has no grade in `newGrades`, the final grade should be `N/A`.
* Must use `filter` and `map` combined.

### 5. Typed Arrays
* Create a function `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.
* Accepts three arguments: `length` (Number), `position` (Number), and `value` (Number).
* If adding the value is not possible, throw the error "Position outside range".

### 6. Set data structure
* Create a function `setFromArray` that returns a `Set` from an array.
* Accepts an array argument (of any kind of elements).

## Requirements
* All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All files should end with a new line
* A `README.md` file at the root of the folder of the project is mandatory
* Your code should use the `js` extension
* Your code will be tested using Jest and the command `npm run test`
* Your code will be verified against lint using ESLint
* Your code needs to pass all tests and lint. You can verify the entire project running `npm run full-test`

## Setup
```bash
# Install dependencies
npm install

# Run tests
npm test

# Run specific test file
npm run dev test_file_name.js
```

