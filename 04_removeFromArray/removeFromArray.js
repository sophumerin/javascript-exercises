const removeFromArray = function(arr, ...toRemove) {
    for(let i = 0; i < toRemove.length; i++){
        arr = arr.filter((elem) => elem !== toRemove[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
