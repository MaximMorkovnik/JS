/* Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. 
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 и 5. */

const numbers = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < numbers.length; i++) {
    const number2string = String(numbers[i]);
    const firstLetter = number2string[0];

    switch (firstLetter) {
        case '1':
        case '2':
        case '5':
            console.log(numbers[i]);
            document.write(numbers[i] + ', ');
    }
}