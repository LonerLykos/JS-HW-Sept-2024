// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage (arrayName, objToAdd) {
    if (typeof arrayName === 'string') {
        const item = JSON.parse(localStorage.getItem(arrayName)) || [];
        item.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(item));
    }
}

let test1 = addToLocalStorage('test', {test: 'test'});
let test2 = addToLocalStorage('test', {test2: 'test2'});

