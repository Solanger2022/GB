let name = 'Иван';
function helloTime() {
let now = new Date();
let hours = now.getHours();
if (hours >= 5 && hours <= 11)
console.log(`Доброе утро, ${name}`);
else if (hours == 12)
console.log(`Добрый день, ${name}`);
else if (hours > 12 && hours <= 17)
console.log('Добрый день, уже вторая половина дня.');
else if (hours > 17 && hours <= 23)
console.log(`Добрый вечер, ${name}`);
else if (hours > 23 && hours <= 5)
console.log(`Доброй ночи, ${name}`);
}
helloTime();