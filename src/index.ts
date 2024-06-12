import { generatePassword } from './passwordGenerator';

const password = generatePassword(12, true, true, true, true);
console.log(`Generated Password: ${password}`);
