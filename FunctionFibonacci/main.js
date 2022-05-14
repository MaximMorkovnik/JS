/* Числа Фибоначчи 1 1 2 3 5 8 13 21 34 55...
Вывести число Фибоначчи по индексу */

function fibonacci(n) {
    let a = 1;
    let b = 1;

    let temp;

    for (let i = 2; i < n; i++) {
        temp = b;
        b = temp + a;
        a = temp;
    }
    console.log(b);
}

fibonacci(10);



// Вывести чисела Фибоначчи от начала до заданного.
function fibonacciSequence(n) {
    const result = [1, 1];

    for (let i = 2; i < n; i++) {
        const next = result[i - 1] + result[i - 2];
        result.push(next);
    }
    console.log(result.splice(0, n));
}

fibonacciSequence(15);
