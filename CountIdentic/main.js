/* Напишите функцию countIdentic(arr), 
которая возвращает количество повторяющихся элементов в массиве. */

const arr = [1, 1, 1, 1, 1, 2, 2, 5, 5, 0, 3, 3, 3]; // 0 - 1, 1 - 5, 2 - 2, 3 - 3, 5 - 2.

function countIdentic(array) {
    const result = {};
    let c = 0;

    for (let i = 0; i < array.length; i++) {
        if (!result[array[i]]) {
            result[array[i]] = 1;
        } else {
            result[array[i]]++;
        }
    }
    console.log(result);
}

countIdentic(arr);


