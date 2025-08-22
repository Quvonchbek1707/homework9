let arr = JSON.parse(prompt("Array bering:"));

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
