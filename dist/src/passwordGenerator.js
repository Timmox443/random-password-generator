"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = void 0;
function generatePassword(length, useUppercase, useLowercase, useNumbers, useSpecialChars) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    let characters = '';
    if (useUppercase)
        characters += uppercase;
    if (useLowercase)
        characters += lowercase;
    if (useNumbers)
        characters += numbers;
    if (useSpecialChars)
        characters += specialChars;
    if (characters.length === 0) {
        throw new Error('At least one character set must be selected');
    }
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
exports.generatePassword = generatePassword;
