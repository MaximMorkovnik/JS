/* Напишите функцию camelize(str), которая преобразует строки вида "my-short-string" в "myShortString".
То есть дефисы удаляются, а все слова после них получают заглавную букву. */

function camelize(str) {
    const words = str.split('-');
    let result = words[0];

    for (let i = 1; i < words.length; i++) {
        const wordFirstLetter = words[i][0];
        const letter = wordFirstLetter.toUpperCase();

        result += `${letter}${words[i].slice(1)}`
    }
    return result;
}

console.log(camelize('my-short-string'));