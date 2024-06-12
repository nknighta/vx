import {open} from 'open';

// Get command line arguments
const args = process.argv.slice(2);

// Print the arguments
console.log(args[0]);

console.log('Opening browser...')
open(`http://localhost:3000/`)