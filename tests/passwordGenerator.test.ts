import { generatePassword } from '../src/passwordGenerator';

describe('Password Generator', () => {
    test('generates password of correct length', () => {
        const password = generatePassword(10, true, true, true, true);
        expect(password).toHaveLength(10);
    });

    test('throws error if no character set is selected', () => {
        expect(() => generatePassword(10, false, false, false, false)).toThrow('At least one character set must be selected');
    });

    test('includes uppercase characters', () => {
        const password = generatePassword(10, true, false, false, false);
        expect(password).toMatch(/[A-Z]/);
    });

    test('includes lowercase characters', () => {
        const password = generatePassword(10, false, true, false, false);
        expect(password).toMatch(/[a-z]/);
    });

    test('includes numbers', () => {
        const password = generatePassword(10, false, false, true, false);
        expect(password).toMatch(/[0-9]/);
    });

    test('includes special characters', () => {
        const password = generatePassword(10, false, false, false, true);
        expect(password).toMatch(/[!@#$%^&*()\-_=+\[\]{}|;:,.<>?]/);
    });
});
