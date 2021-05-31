const fs = require('fs');

const changeFn = student => student.replace(/66/g, '12');

let result = '';

fs.readFile('students.txt', 'utf-8', (error, data) => {
    if (error) { 
        console.error('Failed reading file.');
        return;
    }

    result = changeFn(data);

    fs.writeFile('editedStudents.txt', result, 'utf-8', (error) => {
        if (error) { console.error('Failed writing file.'); }

        fs.readFile('editedStudents.txt', 'utf-8', (error, data) => {
            if (error) { 
                console.error('Failed reading file.');
                return;
            }

            // Handle data
        });
    });
});

// result = changeFn(result);

// fs.writeFile('editedStudents.txt', result, 'utf-8', (error) => {
//     if (error) { console.error('Failed writing file.'); }
// });

const read = (file, callbackError, callbackSuccess) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (error, data) => {
            if (error) { 
                callbackError(error);
            }

            callbackSuccess(data);
        });
    });
}

const write = (file, data, callbackError, callbackSuccess) => {
    return new Promise((resolve, reject) => {
        if (data) { 
            fs.writeFile(file, data, 'utf-8', (error) => {
                if (error) { 
                    reject(error);
                }
    
                resolve();
            });
        }
    });
}

read('students.txt')
    .then(result => changeFn(result))
    .then(editedResult => write('editedStudents2.txt', editedResult))
    .then(() => console.log('DONE'))
    .catch(error => console.error(error));

// console.log('DONE');