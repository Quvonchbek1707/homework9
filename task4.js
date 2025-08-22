let str = prompt("Array bering: ")
let arr = str
    .replace("[", "")
    .replace("]", "")
    .split(",")
    .map(num => Number(num.trim()));

// I don't know in what format the input array is going to be given. So I assume [ ] will be included in both ends.
// Previous version contained long procedure to get array in both formats.

// let arr = JSON.parse(prompt("Array bering:"));
function findPrimeNumber(arr){
    for(let i =0; i<arr.length; i++){
        let val = arr[i]
        if(isNaN(val)){
            console.log("Error in input")
            return
        }
        if(val%2!==0){
            console.log(val)
            return
        }
    }
}

findPrimeNumber(arr)

