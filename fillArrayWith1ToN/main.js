/* Заполнить массив числами от 1 до n.
Напишите функцию fillArray, которая принимает неотрицательное число n 
и возвращает массив чисел от 1 до n: [1, 2, 3, ..., n] */

function fillArray(n) {
    let arr = [];
    if (n)
        for (let i = 1; i <= n;) arr.push(i++);
    return arr;
}

console.log(fillArray(5));