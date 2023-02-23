// 1.
function userFIO(firstName, lastName, age) {
    return `Привет ${firstName} ${lastName} с возрастом ${Number(age)}`;
    }
    // let f = (fn, ln, age) => `Привет ${fn} ${ln} с возрастом ${age}`;
    // f = 4;
    
    // console.log(userFIO('Иван', 'Васин', '35'));
    
    // 2.
    //const square2 = (numSqr2) => {
   // return numSqr2 ** 2;
    //}
     function square(numSqr) {
    return numSqr ** 2;
     }
    console.log(square2(Number(prompt('Введите число, которое будет возведено в квадрат'))));
    
    // 3.
    
    function positiveOrNegative(number) {
    console.log((number >= 0) ? '+++' : '---');
    }
    positiveOrNegative(prompt('Введите число, функция проверит положительное оно или отрицательное'));