// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    
    // Remove header
    lines.shift();
    
    const students = lines.map(line => line.split(','));
    
    console.log(`Number of students: ${students.length}`);
    
    const fields = {};
    students.forEach(student => {
      const [firstname, , , field] = student;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
