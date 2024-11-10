// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
{
    function square(a, b) {
        let result = a * b;
        if (a !== 0 && b !== 0) {
            return result;
        } else {
            return 0;
        }
    }

    let s1 = square(7, 9);
    console.log(`Площа прямокутника = ${s1}`);
}

console.log(' ');

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

{
    function squareRing(r) {
        const pi = 3.14;
        return r ** 2 * pi;
    }

    let s1 = squareRing(10);
    console.log(`Площа кола = ${s1}`);
}

console.log(' ');

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

{
    function squareCylinder(r, h) {
        const pi = 3.14;
        let result = 2 * pi * r * (r + h);
        return result;
    }

    let s1 = squareCylinder(5, 5);
    console.log(`Площа циліндру = ${s1}`);
}

console.log(' ');

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

{
    let users = [
        {name: 'John', username: 'John-qwe', password: 'qwerty123'},
        {name: 'Nik', username: 'Nik-qwe', password: 'qwerty12'},
        {name: 'Ben', username: 'Ben-qwe', password: 'qwerty1'},
        {name: 'Max', username: 'Max-qwe', password: 'qwerty'},
        {name: 'Dave', username: 'Dave-qwe', password: 'qwert'},
        {name: 'Anny', username: 'Anny-qwe', password: 'qwer'},
        {name: 'Zoe', username: 'Zoe-qwe', password: 'werty123'},
        {name: 'Tom', username: 'Tom-qwe', password: 'erty123'},
        {name: 'Ally', username: 'Ally-qwe', password: 'rty123'},
        {name: 'Luci', username: 'Luci-qwe', password: 'ty123'},
    ];

    function printerArr(arr) {
        for (const item of arr) {
            console.log(item);
        }
    }

    printerArr(users);
}

console.log(' ');

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

{
    function printerParagraph(p) {
        document.write(`<p>${p}</p>`);
    }

    printerParagraph('Lorem');
}

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

{
    function printerUl(li) {
        document.write(`
        <ul>
            <li>${li}</li>
            <li>${li}</li>
            <li>${li}</li>
        </ul>
        `);
    }

    printerUl('Lorem ipsum');
}

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

{
    function writterLi(text, count) {
        document.write(`<ul>`)
        for (let i = 0; i < count; i++) {
            document.write(`<li>${text}</li>`);
        }
        document.write(`</ul>`);
    }

    writterLi('Lorem ipsum', 5);
}

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

{
    let arr = [1, 2, 3, 'okten', 'owu', 'hello', 'world', true, false, 10];

    function printerArray(array) {
        document.write(`<ul>`);
        for (const item of array) {
            if (typeof item === 'string') {
                document.write(`<li>${item}</li>`);
            }
        }
        document.write(`</ul>`);
        document.write(`<ul>`);
        for (const item of array) {
            if (typeof item === "number") {
                document.write(`<li>${item}</li>`);
            }
        }
        document.write(`</ul>`);
        document.write(`<ul>`);
        for (const item of array) {
            if (typeof item === "boolean") {
                document.write(`<li>${item}</li>`);
            }
        }
        document.write(`</ul>`);

    }

    printerArray(arr);
}

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

{
    let users = [
        {name: 'vasya', age: 31, id: 1},
        {name: 'petya', age: 30, id: 2},
        {name: 'kolya', age: 29, id: 3},
        {name: 'olya', age: 28, id: 4},
        {name: 'max', age: 30, id: 5},
        {name: 'anya', age: 31, id: 6},
        {name: 'oleg', age: 28, id: 7},
        {name: 'andrey', age: 29, id: 8},
        {name: 'masha', age: 30, id: 9},
        {name: 'olya', age: 31, id: 10},
        {name: 'max', age: 31, id: 11},
    ];

    function writterArr(users) {
        document.write(`<div style="display: flex; gap: 50px; flex-wrap: wrap">`);
        for (const user of users) {
            document.write(`
                <div>
                <h3>id : <span style="color: dimgray">${user.id}</span></h3>
                <h3>ім'я : <span style="color: dimgray">${user.name}</span></h3>
                <h3>вік : <span style="color: dimgray">${user.age}</span></h3>
                </div>
        `);
        }
        document.write(`</div>`);
    }

    writterArr(users);

}

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

{
    function findMinNum(array) {
        let min = array[0];
        for (const item of array) {
            if (item < min) {
                min = item;
            }
        }
        return min;
    }

    let arr = [87, 53, 42, 21, 10, 35, -1, 40, 0, -12, 90];
    console.log(findMinNum(arr))
}

console.log(' ');

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

{
    let arr = [87, 53, 42, 21, 10, 35, -1, 40, 0, -12, 90];
    function sumNum(array) {
        let sum = 0;
        for (const item of array) {
            sum = sum + item;
        }
        return sum;
    }
    console.log(sumNum(arr));
}

console.log(' ');

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

{
    let arr = [87, 53, 42, 21, 10, 35, -1, 40, 0, -12, 90];
    function swapAll(array) {
        for (let i = 0; i < array.length/2; i++) {
            let temp = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = temp;
        }
        return array;
    }
    console.log(swapAll(arr));

    function swapSome(array,i1,i2) {
        if (i1 < array.length && i2 < array.length) {
        let temp = array[i1];
        array[i1] = array[i2];
        array[i2] = temp;

        return array;
        }
        return -Infinity;
    }
    console.log(swapSome([11,22,33,44],3,1))
}

console.log(' ');

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

{
    function exchange(sumUAH,currencyValues,exchangeCurrency){
        let choiseCurrency;
        for (const item of currencyValues) {
            if (item.currency === exchangeCurrency) {
                choiseCurrency = item;
            }
        }

        let result = sumUAH / choiseCurrency.value;
        return result;
    }
    console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));

}

console.log(' ');