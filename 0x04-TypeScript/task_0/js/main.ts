// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Create array of students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]): void {
    // Create table element
    const table = document.createElement('table');
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';

    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['First Name', 'Location'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.style.border = '1px solid black';
        th.style.padding = '5px';
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body and add student data
    const tbody = document.createElement('tbody');
    students.forEach(student => {
        const row = document.createElement('tr');
        
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        firstNameCell.style.border = '1px solid black';
        firstNameCell.style.padding = '5px';
        
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        locationCell.style.border = '1px solid black';
        locationCell.style.padding = '5px';

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Add table to the document body
    document.body.appendChild(table);
}

// Render the table when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderTable(studentsList);
});
