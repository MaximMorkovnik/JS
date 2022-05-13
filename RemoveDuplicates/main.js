/* Напишите функцию RemoveDuplicates(arr), которая возвращает массив, 
в котором удалены повторяющиеся элементы из массива arr.
(игнорируйте чувствительность к регистру). */

const duplicates = ['A', 'a', 'A', 'B', 'b', 'b', 2, 5, 1, 2, 1, 1, 1];

function removeDuplicates(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const s = String(arr[i]).toUpperCase();

        if (!result.includes(s)) {
            result.push(s);
        }
    }
    return result;
}

console.log(removeDuplicates(duplicates));
console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 5]));
