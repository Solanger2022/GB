let dayOfWeek = Number(prompt('Введите день недели'));
function dayOfTheWeek(dayOfWeek) {
switch (dayOfWeek) {
case 1:
console.log('Понедельник');
break;
case 2:
console.log('Вторник');
break;
case 3:
console.log('Среда');
break;
case 4:
console.log('Четверг');
break;
case 5:
console.log('Пятница');
break;
case 6:
console.log('Суббота');
break;
case 7:
console.log('Воскресенье');
break;
default:
console.log("Нет такого дня недели");
}
}
dayOfTheWeek(dayOfWeek);