//замыкание

//через глобальную пуременную
// let count = 0;
// function counter() {
//     count++
//     return count
// }

// counter();
// counter();
// console.log(counter());

// function counter() {
//     let count = 0;
//     return function () {
//         count++
//         return count
//     }
// }
// let first = counter();
// first();
// first();
// console.log(first());


// let second = counter();
// second();
// console.log(second());


// let third = counter();
// console.log(third());

//рекурсия

// let x = 0;
// function rec() {
//     if (x <= 10) {
//         console.log(x++);
//         rec()
//     }
// }
// rec();


// let arrNums = [1, 2, 3, 4];
// let i = 0;

// function rec(arr, sum) {
//     i++
//     console.log(`функция ${i} началась`);
//     sum += arr.shift();
//     if (arr.length != 0) {
//         sum = rec(arr, sum)
//     }
//     console.log(`функция ${i} завершилась`);
//     return sum
// }
// console.log(rec(arrNums, 0));
// min 06.01

// let arrNums = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < arrNums.length; i++) {
//     console.log(` ${i} круг`)
//     sum += arrNums[i]
// }
// console.log(sum);

// Import stylesheets
// import './style.css';

// Замыкание и рекурсия. Классная работа.

// Задание №1
// Создайте функцию, которая будет запрашивать
// у пользователя число, затем возвращать в
// консоли сумму всех чисел от введенного
// числа до 1.
// Например:
//    Ввод: 5
//    Вывод: 5 + 4 + 3 + 2 + 1 = 15

// let request = +prompt('Enter number');
// function recSum(num) {
//     if (num === 1) return 1;
//     return num + recSum(num - 1)
// }
// console.log(recSum(request));

// Задание №2
// 	Создайте функцию, которая запрашивает у
// пользователя число(в качестве порядкового
// числа по Фибоначи), затем выводит в консоли
// число Фибоначи по этому порядку.
// Например:
//    Ввод: 10;
//    Вывод: 55
// Числа Фибоначчи (ссылка):
// https://shorturl.at/cvE17

// function fib(n) {
//     if (n > 1) {
//         return fib(n - 1) + fib(n - 2)
//     } else {
//         return n
//     }
// }
// console.log(fib(10));


// function fib(n) {
//     return n > 1 ? fib(n - 1) + fib(n - 2) : n
// }
// console.log(fib(10));




// Задание №3
// Создайте функцию, которая преобразовывает
// многомерный массив arr в одномерный массив.
// При помощи рекурсии!

// let arr = [1, [true], [[3], ["hello"]]];
// Вывод: [1,true,3,'hello'];


// let arr = [1, [true], [[3], ["hello"]]];

// let newArr = [];
// const arrToFloat = function (arr, i = 0) {
//     if (i === arr.length) return;
//     if (Array.isArray(arr[i])) arrToFloat(arr[i])
//     else newArr.push(arr[i])
//     arrToFloat(arr, i + 1)
// }
// arrToFloat(arr);
// console.log(newArr)



// Задание №4
// Создайте функцию, которая будет проверять - чётное ли число, или нечетное? В случае если число чётное - верните True, если нечётное - False

// Например
// console.log(recEven(234)); // выведет true
// console.log(recEven(-45)); // выведет false
// console.log(recEven(37)); // выведет false

// let num = +prompt('Enter number')
// function checkNum(num) {

//     if (num % 2 === 0) {
//         console.log('true')
//     } else {
//         console.log('false')
//     }
// }
// checkNum(num)
