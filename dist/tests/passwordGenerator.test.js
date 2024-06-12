"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passwordGenerator_1 = require("../src/passwordGenerator");
describe('Password Generator', () => {
    test('generates password of correct length', () => {
        const password = (0, passwordGenerator_1.generatePassword)(10, true, true, true, true);
        expect(password).toHaveLength(10);
    });
    test('throws error if no character set is selected', () => {
        expect(() => (0, passwordGenerator_1.generatePassword)(10, false, false, false, false)).toThrow('At least one character set must be selected');
    });
    test('includes uppercase characters', () => {
        const password = (0, passwordGenerator_1.generatePassword)(10, true, false, false, false);
        expect(password).toMatch(/[A-Z]/);
    });
    test('includes lowercase characters', () => {
        const password = (0, passwordGenerator_1.generatePassword)(10, false, true, false, false);
        expect(password).toMatch(/[a-z]/);
    });
    test('includes numbers', () => {
        const password = (0, passwordGenerator_1.generatePassword)(10, false, false, true, false);
        expect(password).toMatch(/[0-9]/);
    });
    test('includes special characters', () => {
        const password = (0, passwordGenerator_1.generatePassword)(10, false, false, false, true);
        expect(password).toMatch(/[!@#$%^&*()\-_=+\[\]{}|;:,.<>?]/);
    });
});
