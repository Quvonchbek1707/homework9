let arr = JSON.parse(prompt("Array bering: ")).map(Number);
function massivdagiRaqam(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            return i;
        }
    }
}

console.log(massivdagiRaqam(arr));