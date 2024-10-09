// Task 5: Director and Teacher Interfaces
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Class implementations
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

// Function to create an employee
function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

// Task 6: Type predicate and executeWork function
function isDirector(employee: Teacher | Director): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// Task 7: String literal type and teachClass function
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}

// Test cases
console.log('Task 5 - Creating Employees:');
console.log(createEmployee(200));  // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500')); // Director

console.log('\nTask 6 - Executing Work:');
console.log(executeWork(createEmployee(200)));  // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks

console.log('\nTask 7 - Teaching Classes:');
console.log(teachClass('Math'));    // Teaching Math
console.log(teachClass('History')); // Teaching History

// Export statements for module usage
export {
    DirectorInterface,
    TeacherInterface,
    Director,
    Teacher,
    createEmployee,
    isDirector,
    executeWork,
    Subjects,
    teachClass
};
