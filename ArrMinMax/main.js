/* Найдите минимальный и максимальный элемент в массиве. */

const arrMinMax = [1, 2, 3, 4, 4, 100];
let min = arrMinMax[0],
    max = arrMinMax[0];

for (let i = 0; i < arrMinMax.length; i++) {
    min = Math.min(arrMinMax[i], min);
    max = Math.max(arrMinMax[i], max);
}

console.log(min, max);