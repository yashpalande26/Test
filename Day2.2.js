function summul(a,b,n){
    let sum = 0;
    for (let i = 0; i < n; i++){
        if (i % a === 0 || i % b === 0){
            sum = sum + i;
        }
    }
    return sum
}

function summulip(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let x = parseInt(document.getElementById("x").value);
    let answer = summul(a,b,x);
    alert("sum = " + answer)
}