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
countPrimeNumbers();
time = performance.now() - time;
console.log('Execution time of printing countPrimeNumbers was ' + time + ' milliseconds.');