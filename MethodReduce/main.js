/* Дан массив с числами. Найдите сумму первых N элементов до первого нуля. 
Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как 
дальше стоит элемент с числом 0, получаем 1 + 2 + 3 = 6 (reduce) */


const arr = [1, 2, 3, 0, 4, 5, 6];

let zeroFound = false;

const result = arr.reduce((acc, next) => {
    if (!zeroFound) {
        if (next === 0) {
            zeroFound = true;
        } else {
            return acc + next;
        }
    }
    return acc;
})

console.log(result);