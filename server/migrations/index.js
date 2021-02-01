
/* eslint import/no-dynamic-require: 0 */

const args = process.argv.slice(2);
const path = require('path');


setTimeout( async () => {
    console.log('Migrate config');
    await require('./config');
})



console.log('------------------------->>>', process.argv);