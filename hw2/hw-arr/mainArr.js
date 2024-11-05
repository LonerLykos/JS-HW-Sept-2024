console.log('Arr-part')
console.log(' ')

// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

{
    let arr = [1, 2, 3, '4', '5', '6', '7', true, false, 10];

    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);
    console.log(arr[5]);
    console.log(arr[6]);
    console.log(arr[7]);
    console.log(arr[8]);
    console.log(arr[9]);
}

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

{
    let book1 = {
        title: 'I, robot',
        pageCount: 270,
        genre:  'science fiction',
    };
    let book2 = {
        title: 'Children of Dune',
        pageCount: 444,
        genre:  'science fiction',
    };
    let book3 = {
        title: 'Blindsight',
        pageCount: 384,
        genre:  'science fiction',
    };
}

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

{
    let book1 = {
        title: 'I, robot',
        pageCount: 270,
        genre:  'science fiction',
        authors: [{
            name: 'Isaac Asimov',
            age: null,
        }]
    };
    let book2 = {
        title: 'Children of Dune',
        pageCount: 444,
        genre:  'science fiction',
        authors: [{
            name: 'Frank Herbert',
            age: null,
        }]

    };
    let book3 = {
        title: 'Blindsight',
        pageCount: 384,
        genre:  'science fiction',
        authors: [{
            name: 'Peter Watts',
            age: 66,
        }]

    };
}

console.log(' ')

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

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

    console.log(users[0].password);
    console.log(users[1].password);
    console.log(users[2].password);
    console.log(users[3].password);
    console.log(users[4].password);
    console.log(users[5].password);
    console.log(users[6].password);
    console.log(users[7].password);
    console.log(users[8].password);
    console.log(users[9].password);
}

console.log(' ')

// описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

{
    let weekTemperature = [
        {day1: [{morning: 10}, {afternoon: 15}, {evening: 12},]},
        {day2: [{morning: 12}, {afternoon: 17}, {evening: 14},]},
        {day3: [{morning: 14}, {afternoon: 19}, {evening: 16},]},
        {day4: [{morning: 16}, {afternoon: 21}, {evening: 18},]},
        {day5: [{morning: 14}, {afternoon: 23}, {evening: 15},]},
        {day6: [{morning: 12}, {afternoon: 26}, {evening: 17},]},
        {day7: [{morning: 10}, {afternoon: 18}, {evening: 8},]},
    ];
}

console.log(' ')


