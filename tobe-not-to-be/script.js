/**
 * @param {any} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (expected) => {
            if (val === expected) return true;
            throw new Error("Not Equal");
        },
        notToBe: (expected) => {
            if (val !== expected) return true;
            throw new Error("Equal");
        }
    };
};

/**
 * Example Usage:
 */
console.log(expect(5).toBe(5));  // true
console.log(expect(5).notToBe(10)); // true
// expect(5).toBe(10); // Throws "Not Equal"
// expect(5).notToBe(5); // Throws "Equal"
