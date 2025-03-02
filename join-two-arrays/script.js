/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // Create a map to hold merged objects based on id
    let map = new Map();

    // Helper function to merge two objects based on id
    const mergeObjects = (obj1, obj2) => {
        let merged = { ...obj1 };
        for (let key in obj2) {
            merged[key] = obj2[key];
        }
        return merged;
    };

    // Process the first array
    arr1.forEach(obj => {
        map.set(obj.id, obj);
    });

    // Process the second array and merge with existing objects in the map
    arr2.forEach(obj => {
        if (map.has(obj.id)) {
            map.set(obj.id, mergeObjects(map.get(obj.id), obj));
        } else {
            map.set(obj.id, obj);
        }
    });

    // Convert the map to an array and sort by id in ascending order
    let joinedArray = Array.from(map.values()).sort((a, b) => a.id - b.id);

    return joinedArray;
};

