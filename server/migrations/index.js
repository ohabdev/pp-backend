
/* eslint import/no-dynamic-require: 0 */

const args = process.argv.slice(2);
const path = require('path');

if (args.length && args[0] === 'test') {
    console.log('Test');
    process.exit();
} if (args.length && args[0]) {
    setTimeout( async () => {
        console.log('Migrate data');
        await require(path.join(__dirname, args[0]))();

        console.log('======>> Migrate data done...');
        process.exit();
    });    
} else {
    setTimeout( async () => {

        console.log('======>> Config data migrating...');
        await require('./config')();
        console.log('======>> Config data migration done');
        
        console.log('======>> All data migration done');
        process.exit();
    });
}
