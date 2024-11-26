// 5-http.js
const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
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
      
      resolve(output.trim());
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const databasePath = process.argv[2];
      const studentsInfo = await countStudents(databasePath);
      res.end(`This is the list of our students\n${studentsInfo}`);
    } catch (error) {
      res.end(`This is the list of our students\n${error.message}`);
    }
  }
});

app.listen(1245);

module.exports = app;
