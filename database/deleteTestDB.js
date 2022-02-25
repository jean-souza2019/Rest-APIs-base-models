const fs = require('fs');

const path = './dbTest.sqlite';

try {
    fs.unlinkSync(path);
} catch (error) {
    console.error(error);
}