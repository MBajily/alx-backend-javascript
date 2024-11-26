// full_server/utils.js
import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      reject(error);
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    lines.shift(); // Remove header

    const studentFields = {};

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!studentFields[field]) {
        studentFields[field] = [];
      }
      studentFields[field].push(firstname);
    });

    resolve(studentFields);
  });
});

export default readDatabase;
