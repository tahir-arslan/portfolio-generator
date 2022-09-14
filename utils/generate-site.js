const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if err, reject promise and send err to promise's `.catch()` method
            if (err) {
                reject(err);
                // return is necessary to exit function, otherwise it will continue to resolve (next code)
                return;
            }
            // if success, resolve promise and send successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
};


module.exports = { writeFile, copyFile };