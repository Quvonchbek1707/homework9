function multiply(arr) {
    function inner(num, i = 0, result = []) {
        if (i === arr.length) return result;
        result.push(arr[i] * num);         
        return inner(num, i + 1, result);
    }
    return function(num) {
        return inner(num);
    };
}
console.log(multiply([1, 2, 3])(2));