let str = prompt("So'z bering")

function spelling(str) {
    let result = [];
    for (let i = 1; i <= str.length; i++) {
        result.push(str.slice(0, i));
    }
    return result;
}

console.log(spelling(str));