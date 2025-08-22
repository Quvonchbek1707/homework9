let str = prompt("Array bering: ");
let arr = str
    .replace("[", "")
    .replace("]", "")
    .split(",")
    .map(num => Number(num.trim()));

function formatPhoneNumber(arr) {
    if (arr.length !== 10 || arr.some(isNaN)) {
        console.log("Error: enter exactly 10 digits");
        return;
    }
    let area = arr.slice(0, 3).join("");
    let middle = arr.slice(3, 6).join("");
    let last = arr.slice(6).join("");
    let ans = `(${area}) ${middle}-${last}`;
    console.log(ans);
}

formatPhoneNumber(arr);
