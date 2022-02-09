function countPrimeNumbers() {
    let count = 0
    for (let i = 2; i <= 100 ; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            count += 1;
        }        
    }
    return(count);
}
let time = performance.now();
for (let i = 1; i <= 100 ; i++) {
    countPrimeNumbers();
}
time = performance.now() - time;
console.log('Execution time of calculating prime numbers 100 times was ' + time + ' milliseconds.');