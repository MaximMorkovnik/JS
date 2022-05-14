/* Создать функцию createMatrix(), принимающую количество строк и количество столбцов матрицы и
возвращающую матрицу (массив массивов), заполненную случайными числами в диапазоне от 0 до 100.
Вывести эту матрицу в виде таблицы HTML */

function createMatrix(n, m) {
    const matrix = [];

    for (let i = 0; i < n; i++) {
        const row = [];

        for (let j = 0; j < m; j++) {
            const p = Math.ceil(Math.random() * 100);

            row.push(p);
        }
        matrix[i] = row;
    }
    return matrix;
}

console.log(createMatrix(7, 7));