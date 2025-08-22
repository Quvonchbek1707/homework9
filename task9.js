let arr = JSON.parse(prompt("Array bering:"));

function chatRoomStatus(arr){
    if(arr.length===0){
        console.log("onlayn hech kim")
        return
    }
    if(arr.length===1){
        console.log(`${arr[0]} onlayn`)
        return
    }
    if(arr.length===2){
        console.log(`${arr[0]} va ${arr[1]} onlayn`)
        return
    }
    if(arr.length>2){
        console.log(`${arr[0]}, ${arr[1]} va ${arr.length-2} ta onlayn`)
    }
}
chatRoomStatus(arr)
