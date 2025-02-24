/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completedPromises = 0;

        functions.forEach((func, index) => {
            func()
                .then((result) => {
                    results[index] = result;
                    completedPromises++;
                    if (completedPromises === functions.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
