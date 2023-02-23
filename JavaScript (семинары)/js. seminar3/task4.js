const dayWeek = (num) => {
    num = Number(num);
    if (num === 1) {
    return console.log('Понедельник');
    } else if (num === 2) {
    return console.log('Вторник');
    } else if (num === 3) {
    return console.log('Среда');
    } else if (num === 4) {
    return console.log('Четверг');
    } else if (num === 5) {
    return console.log('Пятница');
    } else if (num === 6) {
    return console.log('Суббота');
    } else if (num === 7) {
    return console.log('Воскресенье');
    } else if (num < 1 || num > 7) {
    return console.log('Такого дня недели нет');
    }
    }
    console.log(dayWeek((prompt('Введите число'))));