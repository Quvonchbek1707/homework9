let str = prompt("Array bering: ")
let arr = str
    .replace("[", "")
    .replace("]", "")
    .split(",")
    .map(num => Number(num.trim()));

// I don't know in what format the input array is going to be given. So I assume [ ] will be included in both ends.
// Previous version contained long procedure to get array in both formats.
// Comments are not made with AI :)
// let arr = JSON.parse(prompt("Array bering:"));

function func(arr){
    let val = arr[0]
    let tal = arr[1]
    if(isNaN(val) || isNaN(tal)){
        console.log("Error in input")
        return
    }
    for(let j=0; j<tal-1; j++){
        val+=arr[0];
    }
    console.log(val)    
}

func(arr)

