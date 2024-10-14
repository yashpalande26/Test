const a = [89, 5, 8, 7]; 
const l = [6,9,4,2,8,6,8]; 

function calsum() {
    let sum = 0;

    alert('working');
    for (let i = 0; i < l.length; i++) {
        let num = l[i];
        for (let j = 0; j < a.length; j++) {
            if (num % a[j] === 0) {
                sum += num; 
                break; 
            }
        }
    }
    alert('Sum of multiples: ' +sum);
}
