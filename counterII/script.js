/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentValue = init; // Store the initial value

    return {
        increment: function() {
            currentValue += 1; // Increase the current value by 1
            return currentValue;
        },
        decrement: function() {
            currentValue -= 1; // Decrease the current value by 1
            return currentValue;
        },
        reset: function() {
            currentValue = init; // Reset the current value to the initial value
            return currentValue;
        }
    };
};

// Example usage:
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4