console.log('LOGIC-part');
console.log(' ');

// Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

{
    let arr = [1, 0, -3];

    let x = arr[0];
    if (x !== 0) {
        console.log('True');
    } else {
        console.log('False')
    }

    let y = arr[1];
    if (y !== 0) {
        console.log('True');
    } else {
        console.log('False');
    }

    let a = arr[2];
    if (a !== 0) {
        console.log('True');
    } else {
        console.log('False');
    }

}

console.log(' ');

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

{
    let time = +prompt('Введіть хвилини для перевірки логіки чверті від 0 до 59');
    if (0 <= time && time <= 15) {
        console.log('перша чверть');
    } else if (16 <= time && time <= 30) {
        console.log('друга чверть');
    } else if (31 <= time && time <= 45) {
        console.log('третя чверть');
    } else if (46 <= time && time <= 59) {
        console.log('четверта чверть');
    } else {
        console.log('invalid time');
    }
}

console.log(' ');

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

{
    let day = +prompt('Введіть день для перевірки логіки Декад від 1 до 31');
    if (1 <= day && day <= 11) {
        console.log('перша декада');
    } else if (12 <= day && day <= 21) {
        console.log('друга декада');
    } else if (22 <= day && day <= 31) {
        console.log('третя декада');
    } else {
        console.log('invalid day');
    }
}

console.log(' ');

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

{
    let arr = [
        {
            day1: 'Monday', tasks: {
                atMorning: 'wake up', inAfternoon: 'do something', onEvening: 'go to sleep'
            },
        },
        {
            day2: 'Tuesday', tasks: {
                atMorning: 'wake up', inAfternoon: 'go to work', onEvening: 'go to sleep'
            },
        },
        {
            day3: 'Wednesday', tasks: {
                atMorning: 'wake up', inAfternoon: 'go to work', onEvening: 'go to sleep'
            },
        },
        {
            day4: 'Thursday', tasks: {
                atMorning: 'wake up', inAfternoon: 'go to work', onEvening: 'go to sleep'
            },
        },
        {
            day5: 'Friday', tasks: {
                atMorning: 'wake up', inAfternoon: 'go to work', onEvening: 'go to sleep'
            },
        },
        {
            day6: 'Saturday', tasks: {
                atMorning: 'wake up', inAfternoon: 'rest', onEvening: 'go to sleep'
            },
        },
        {
            day7: 'Sunday', tasks: {
                atMorning: 'wake up', inAfternoon: 'rest', onEvening: 'go to sleep'
            },
        },
    ]
    let day = +prompt('Введіть порядковий номер дня тижня');
    switch (day) {
        case 1:
            console.log(arr[0]);
            break;
        case 2:
            console.log(arr[1]);
            break;
        case 3:
            console.log(arr[2]);
            break;
        case 4:
            console.log(arr[3]);
            break;
        case 5:
            console.log(arr[4]);
            break;
        case 6:
            console.log(arr[5]);
            break;
        case 7:
            console.log(arr[6]);
            break;
        default:
            console.log('invalid day-number');
    }
}

console.log(' ');

// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

{
    let num1 = 31;
    let num2 = +prompt('Веедіть друге число для перевірки логіки порівняння чисел')
    if (num1 < num2) {
        console.log(num2)
    } else if (num1 > num2) {
        console.log(num1)
    } else if (num1 === num2) {
        console.log(`${num1} = ${num2}`)
    } else {
        console.log('something wrong')
    }
}

console.log(' ');

// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

{
    let x;
    if (!x) {
        x = "default"
        console.log(x);
    }
}

console.log(' ')

// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    if (coursesAndDurationArray[0].monthDuration > 5) {
        console.log("Супер", coursesAndDurationArray[0].title);
    }
    if (coursesAndDurationArray[1].monthDuration > 5) {
        console.log("Супер", coursesAndDurationArray[1].title);
    }
    if (coursesAndDurationArray[2].monthDuration > 5) {
        console.log("Супер", coursesAndDurationArray[2].title);
    }
    if (coursesAndDurationArray[3].monthDuration > 5) {
        console.log("Супер", coursesAndDurationArray[3].title);
    }
    if (coursesAndDurationArray[4].monthDuration > 5) {
        console.log("Супер", coursesAndDurationArray[4].title);
    }
    if (coursesAndDurationArray[5].monthDuration > 5) {
        console.log("Супер", coursesAndDurationArray[5].title);
    }
}




