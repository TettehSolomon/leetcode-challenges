/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = args.toString();
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    }
}

// Example usage for sum
let callCount = 0;
const memoizedSum = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});
console.log(memoizedSum(2, 3)); // 5
console.log(memoizedSum(2, 3)); // 5
console.log(callCount); // 1

// Example usage for fib
callCount = 0;
const memoizedFib = memoize(function (n) {
    callCount += 1;
    if (n <= 1) return 1;
    return memoizedFib(n - 1) + memoizedFib(n - 2);
});
console.log(memoizedFib(5)); // 8
console.log(callCount); // Varies, but calls are memoized

// Example usage for factorial
callCount = 0;
const memoizedFactorial = memoize(function (n) {
    callCount += 1;
    if (n <= 1) return 1;
    return n * memoizedFactorial(n - 1);
});
console.log(memoizedFactorial(5)); // 120
console.log(callCount); // Varies, but calls are memoized
