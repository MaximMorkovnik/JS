/* Найдите минимальный и максимальный элемент в массиве. */

const arrMinMax = [1, 2, 3, 4, 4, 100];
let min = arrMinMax[0],
    max = arrMinMax[0];

for (let i = 0; i < arrMinMax.length; i++) {
    min = Math.min(arrMinMax[i], min);
    max = Math.max(arrMinMax[i], max);
}

console.log(min, max);



// Вариант 2 (рекурсия)

function recMin(arr, min) {
    if (min === undefined) {
        min = arr.pop();
    }

    if (arr.length > 0) {
        let current = arr.pop();

        min = Math.min(current, min); // при Math.max будет искать максимальное значение

        return recMin(arr, min);
    }
    return min;
}

console.log(recMin([1000, -20, 70, 1, 6, 7, 75, 100]))