/*Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени */ 
/*let numberOne = Number(prompt("Введите первое число")); 
let numberTwo = Number(prompt("Введите второе число")); 
let degree = 3;
const sumOfCubes = () => { return numberOne ** degree + numberTwo ** degree; }
 console.log(`Желаемое число ${sumOfCubes()}`);   */

 /*2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"*/ 
 
//const userMoney = Number(prompt("Введите сумму заработной платы"));
//if (isNaN(userMoney)) { console.log(`вы ввели текстовое значение`);
    
//}
//const tax = (money) => {return money = money * 0.87
    
//} 
//console.log(`Размер заработной платы за вычетом налогов равен ${tax(userMoney)}`); 

/*3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел*/ 

//let numberOne = Number(prompt("Введите первое число")); 
//let numberTwo = Number (prompt("Введите второе число")); 
//let numberThree = Number (prompt("Введите третье число")); 
//const maxNumber = () => { if (numberOne > numberTwo && numberOne > numberThree) { return numberOne; }
 //else if (numberTwo > numberOne && numberTwo > numberThree) { return numberTwo; } 
//else if (numberThree > numberOne && numberThree > numberTwo) { return numberThree ; }
    
//} 
//console.log(`максимальное число ${maxNumber()}`); 

/*4
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.*/ 

/*a*/ 

/*let numberOne = Number(prompt("Введите первое число")); 
let numberTwo = Number(prompt("Введите второе число")); 
const sum = () => { return numberOne + numberTwo; } 
console.log(`Сумма чисел ${sum(numberOne + numberTwo)}`);*/ 

/*b*/
/*let numberOne = Number(prompt("Введите первое число")); 
let numberTwo = Number(prompt("Введите второе число")); 
const difference = () => { if(numberOne > numberTwo) return numberOne - numberTwo; else if(numberOne < numberTwo) return numberTwo - numberOne; 
else if (numberOne === numberTwo) return 0; 
    
}   
console.log(`Разность чисел ${difference()}`); */

/*c*/ 
/*let numberOne = Number(prompt("Введите первое число")); 
let numberTwo = Number(prompt("Введите второе число")); 
const multiplication = () => { return numberOne * numberTwo; }
    
console.log(`Произведение чисел ${multiplication()}`);*/  

/*d*/ 

/*let numberOne = Number(prompt("Введите первое число")); 
let numberTwo = Number(prompt("Введите второе число")); 
const dividing = () => {if (numberTwo===0) console.log(`вы ввели неверное значение`); 
else if (numberTwo > 0 || numberTwo < 0) return numberOne / numberTwo;}
    

console.log(`Результат деления чисел ${dividing()}`); */


