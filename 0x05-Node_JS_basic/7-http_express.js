// 7-http_express.js
const express = require('express');
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter(line => line.trim() !== '');
      lines.shift(); // Remove header
      
      const students = lines.map(line => line.split(','));
      
      let output = `Number of students: ${students.length}\n`;
      
      const fields = {};
      students.forEach(student => {
        const [firstname, , , field] = student;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });
      
      for (const [field, names] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      
      return output.trim();
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const databasePath = process.argv[2];
    const studentsInfo = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentsInfo}`);
  } catch (error) {
    res.status(500).send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(port);

module.exports = app;
