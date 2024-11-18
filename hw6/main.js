// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
{
    let string1 = 'hello world';
    let string2 = 'lorem ipsum';
    let string3 = 'javascript is cool';
    console.log(string1.length);
    console.log(string2.length);
    console.log(string3.length);
}
console.log(' ');

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
{
    let sting1 = 'hello world';
    let sting2 = 'lorem ipsum';
    let sting3 = 'javascript is cool';
    console.log(sting1.toUpperCase());
    console.log(sting2.toUpperCase());
    console.log(sting3.toUpperCase());
}

console.log(' ');

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
{
    let sting1 = 'HELLO WORLD';
    let sting2 = 'LOREM IPSUM';
    let sting3 = 'JAVASCRIPT IS COOL';
    console.log(sting1.toLowerCase());
    console.log(sting2.toLowerCase());
    console.log(sting3.toLowerCase());
}

console.log(' ');

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
{
    let str = ' dirty string   ';
    let cleanStr = str.trim();
    console.log(cleanStr);
}

console.log(' ');

//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
{
    let str = 'Ревуть воли як ясла повні';
    let stringToArray = (string) => string.split(' ');
    let arr = stringToArray(str);
    console.log(arr);
}

console.log(' ');

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
{
    let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
    let arrOfStr =
        arr.map(arrItem => arrItem.toString());
    console.log(arrOfStr);

}
console.log(' ');

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
{
    let nums = [11, 21, 3];
    let sortNums = (array, direction) => {
        if (direction === 'ascending') {
            array.sort((num1, num2) => num1 - num2);
        } else if (direction === 'descending') {
            array.sort((num1, num2) => num2 - num1);
        }
        return array;
    };

    console.log(sortNums(nums, 'ascending'));
    console.log(sortNums(nums, 'descending'));

    // or
    let sortNums2 = (arr, direction) => (direction === 'ascending') ? arr.sort((num1, num2) => num1 - num2) : arr.sort((num1, num2) => num2 - num1);
    // не досконалість даного методу полягає в тому, що другий параметр функції може приймати будь-яке значення
    // що в свою чергу нівелює правильність відпрацювання функції,
    // але в розрізі даного завдання де параметрами може слугувати тільки 'ascending' чи 'descending'
    // розв'язок виконується. Зроблено просто для огляду тернарного оператора)
    console.log(sortNums2(nums, 'ascending'));
    console.log(sortNums2(nums, 'descending'));

}
console.log(' ');

// #yo06d74c1C
// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    const sortCourses = coursesAndDurationArray.sort((course1, course2) => course2.monthDuration - course1.monthDuration);

    console.log(sortCourses);

    const filteredArr = coursesAndDurationArray.filter(item => item.monthDuration > 5);

    console.log(filteredArr);

    const mapedCoursesArr = coursesAndDurationArray.map((item, index) => {
        return {
            id: index + 1,
            title: item.title,
            monthDuration: item.monthDuration,
        };
    });
    console.log(mapedCoursesArr);

//     abbreviated entry to fulfill all three conditions
    const mapedCourses = coursesAndDurationArray
        .sort((a, b) => b.monthDuration - a.monthDuration)
        .filter(item => item.monthDuration > 5)
        .map((item, index) => ({...item, id: index + 1}));

    console.log(mapedCourses);
}
console.log(' ');

//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// let cards = {
//         cardSuit: ['', 'spade', 'diamond', 'heart', 'clubs'],
//         value: ['', '6' - '10', 'ace', 'jack', 'queen', 'king'],
//         color: ['', 'red', 'black'],
//     };
{
    const suits = ['spade', 'diamond', 'heart', 'club'];
    const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']

    let deck = [];
    for (const value of values) {
        for (const suit of suits) {
            const card = {cardSuit: suit, value: value};
            if (suit === 'heart' || suit === 'diamond') {
                card.color = 'red';
            } else {
                card.color = 'black';
            }
            deck.push(card);
        }
    }

    console.log(deck);

    // - знайти піковий туз
    console.log(deck.find(card => card.cardSuit === 'spade' && card.value === 'ace'));
    // - всі шістки
    console.log(deck.filter(card => card.value === '6'));
    // - всі червоні карти
    console.log(deck.filter(card => card.color === 'red'));
    // - всі буби
    console.log(deck.filter(card => card.cardSuit === 'diamond'));
    // - всі трефи від 9 та більше
    console.log(filter = deck.filter(card => card.cardSuit === 'club' && card.value !== '6' && card.value !== '7' && card.value !== '8' && card.value !== '9'));

}

console.log(' ');

//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

{
    const suits = ['spade', 'diamond', 'heart', 'club'];
    const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']

    let deckOfCards = [];
    for (const value of values) {
        for (const suit of suits) {
            const card = {cardSuit: suit, value: value};
            if (suit === 'heart' || suit === 'diamond') {
                card.color = 'red';
            } else {
                card.color = 'black';
            }
            deckOfCards.push(card);
        }
    }

     const reduce = deckOfCards.reduce((acc, card) => {
        switch (card.cardSuit) {
            case 'spade':
                acc.spades.push(card);
                break;
            case 'diamond':
                acc.diamonds.push(card);
                break;
            case 'heart':
                acc.hearts.push(card);
                break;
            case 'club':
                acc.clubs.push(card);
                break;
        }
        return acc
    }, {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    });

    console.log(reduce);

}

console.log(' ');

// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
{
    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];

    let sortSass = coursesArray.filter(item => item.modules.includes('sass'));

    console.log(sortSass);

    let sortDocker = coursesArray.filter(item => item.modules.includes('docker'));

    console.log(sortDocker);
}
