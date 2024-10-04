// a.
// Create a function which takes parameters a,b,l
// l is a list of integers
// find the sum of all the multiples of a or b in l

function summul(a,b,n) {
    let sum = 0

    for(let i = 0; i < n.length; i++)
    {
        if(n[i] % a === 0 || n[i] % b === 0){
            sum = sum + n[i]
        }
    }
    return sum
}

let a = 3
let b = 5
let l = [2,6,88,22,76,13,17]


console.log(summul(a,b,l))

alert(result);