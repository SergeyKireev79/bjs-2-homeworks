function compareArrays(arr1, arr2) {
    let result;
    if (arr1.every((item, i) => item === arr2[i]) && arr1.length == arr2.length) {
        result = true
    } else result = false;
    return result;
}

function advancedFilter(arr) {
    let resultArr = arr.filter((item) => item >= 0 && item % 3 === 0)
        .map((item) => item * 10)
    return resultArr;
}