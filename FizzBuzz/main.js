/* Напишите программу, которая выводит на экран числа от 1 до 100. 
При этом вместо чисел, кратным 3, программа должна выводить слово "Fizz", 
а вместо чисел, кратных 5 - слово "Buzz". Если число кратно и 3, и 5, 
то программа должна выводить слово "FizzBuzz". */

for (let i = 1; i < 101; i++) {
    let phrase = '';

    if (i % 3 === 0) {
        phrase += 'Fizz';
    }

    if (i % 5 === 0) {
        phrase += 'Buzz';
    }

    if (phrase) {
        document.write(phrase + ' '),
            console.log(phrase + ' ');
    } else {
        document.write(i + ' '),
            console.log(i + ' ');
    }
}

