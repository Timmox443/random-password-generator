"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passwordGenerator_1 = require("./passwordGenerator");
const password = (0, passwordGenerator_1.generatePassword)(12, true, true, true, true);
console.log(`Generated Password: ${password}`);
