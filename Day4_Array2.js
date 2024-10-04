// b.
// Create a function which takes parameters a,l
// a is a list of two integers
// l is a list of integers
// find the sum of all the multiples of elements of a in l


function summul(a,l) {
    let sum = 0

    for(let i = 0; i < l.length; i++)
    {
        if(l[i] % a[0] === 0 || l[i] % a[1] === 0){
            sum = sum + l[i]
        }
    }
    return sum
}

let a = [3, 5];
let l = [2,6,88,6,76,13,17]


let result = summul(a,l)

alert(result);