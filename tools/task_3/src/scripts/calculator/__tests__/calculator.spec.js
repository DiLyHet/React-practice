import { sum, mult } from "../calculator";

describe('Sum function', () => {
    test('should sum two numbers', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(10, 10)).toBe(20);
        expect(sum(37, 3)).toBe(40);
    })
});

describe('Mult function', () => {
    test('should multiply two numbers', () => {
        expect(mult(2, 3)).toBe(6);
        expect(mult(10, 10)).toBe(100);
        expect(mult(2, 20)).toBe(40);
    })
});