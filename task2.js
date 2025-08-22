let str = prompt("Array bering: ")
let arr = str
    .replace("[", "")
    .replace("]", "")
    .split(",")
    .map(num => Number(num.trim()));
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