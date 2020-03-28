const path = require('path');

const pathObject = path.parse(__filename);

console.log(pathObject);
//   root: '/',
//   dir: '/Users/magda/code/magdacembor/Node/node lesson/first-app/4',
//   base: 'app.js',
//   ext: '.js',
//   name: 'app'