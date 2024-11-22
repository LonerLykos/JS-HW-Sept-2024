// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
//
{
    function clonner(obj) {
        if (obj) {
            let funcs = [];
            for (const key in obj) {
                if (typeof obj[key] === 'function') {
                    let item = obj[key].bind({});
                    funcs.push({item, key});
                }
            }
            console.log(funcs);
            const parseObj = JSON.parse(JSON.stringify(obj));
            for (const func of funcs) {
                parseObj[func.key] = func.item;
            }

            return parseObj;
        }

        throw new Error('some error occurred')
    }

    let user = {
        id: 1,
        name: 'Tom',
        vitannay() {
            return (`my name is ${this.name}!`)
        },
        some() {
            return ('item')
        },
        last(){
            return ('some');
        }
    }

    let user2 = clonner(user);
    console.log(user);
    console.log(user2);
    // console.log(user2.greeting());
}

// #iz6emEsP2BA
// - є масив
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
{
    let courses = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    console.log(courses.map((item, index) => ({
        ...item, id: index + 1
    })));
}