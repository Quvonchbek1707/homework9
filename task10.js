let str = prompt("Array bering: ")
let arr = str
    .replace("[", "")
    .replace("]", "")
    .split(",")
    .map(s => s.trim().toLowerCase() === "true");
function countTrue(arr){
    let result = 0;
       arr.forEach(el => {
        if (el === true) result++;
    });
    console.log(result)
}
countTrue(arr)