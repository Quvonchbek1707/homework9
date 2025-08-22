let str = prompt("Array bering: ")
let arr = str
    .replace("[", "")
    .replace("]", "")
    .split(",")
    .map(num => Number(num.trim()));

// I don't know in what format the input array is going to be given. So I assume [ ] will be included in both ends.
// Previous version contained long procedure to get array in both formats.

// let arr = JSON.parse(prompt("Array bering:"));

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

function sumOfCubes(arr){
    let total = 0;
    for(let i=0; i<arr.length; i++){
        let key = arr[i]
        if(isNaN(Number(key))){
            console.log("Xato ma'lumot")
            return
        }
        total +=Number(key)**3
    }
    console.log(total)
}

sumOfCubes(arr)
