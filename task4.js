let arr = JSON.parse(prompt("Array bering:"));

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
