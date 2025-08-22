let str = prompt("Array bering: ")
let arr = str
    .replace("[", "")
    .replace("]", "")
    .split(",")
    .map(num => String(num.trim()));
function returnVowel(arr){
    let ans = []
    for(let i = 0; i<arr.length; i++){
        let val = arr[i]
        let soz = ""
        for(let j=0; j<val.length; j++){
            let v = val[j]
            if(v==="a" || v==="e" || v==="u" || v==="i" || v==="o"){
                soz+=v;
            }
        }
        if(soz.length>0){
            ans.push(soz)
        }
    }
    console.log(ans)
}

returnVowel(arr)