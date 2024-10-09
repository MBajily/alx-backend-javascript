// Task 1: Teacher Interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;  // Index signature for additional attributes
}

// Task 2: Directors Interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Task 3: PrintTeacher Interface and Implementation
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Task 4: Student Class Interfaces and Implementation
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage and testing
// Task 1 Example
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};

// Task 2 Example
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

// Task 3 Example
console.log(printTeacher("John", "Doe")); // Should print: J. Doe

// Task 4 Example
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Should print: Currently working
console.log(student.displayName()); // Should print: John

// Export statements for module usage
export {
    Teacher,
    Directors,
    printTeacherFunction,
    StudentClass,
    StudentClassInterface,
    StudentConstructor
};
