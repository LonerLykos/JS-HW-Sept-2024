// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let arr = [];

function Item(id, item, prise) {
    this.id = id;
    this.item = item;
    this.prise = prise;
}

for (let i = 0; i < 100; i++) {
    let id = i + 1;
    let item = i + 1 + 'someItem';
    let prise = 100 + (i * 100);
    arr.push(new Item(id, item, prise));
}

let startPage = +JSON.parse(localStorage.getItem('startPage')) || 1;
const div = document.createElement('div');
div.classList.add('info');

let startArr = arr.filter(item => (item.id > ((startPage * 10) - 10) && item.id <= (startPage * 10)));

startArr.forEach(item => {
    const divItem = document.createElement('div');
    for (let key in item) {
        const p = document.createElement('p');
        p.textContent = `${key}: ${item[key]}`;
        divItem.appendChild(p);
    }
    div.appendChild(divItem);
});


const btnPrev = document.createElement('button');
btnPrev.textContent = 'Prev';
btnPrev.onclick = function () {
    let prevPage = startPage - 1;
    if (prevPage > 0) {
        startPage = prevPage;
        localStorage.setItem('startPage', startPage);
        location.reload();
    } else {
        startPage = 10;
        localStorage.setItem('startPage', startPage);
        location.reload();
    }
}

const btnNext = document.createElement('button');
btnNext.textContent = 'Next';
btnNext.onclick = function () {
    let nextPage = startPage + 1;
    if (nextPage < 11) {
        startPage = nextPage;
        localStorage.setItem('startPage', startPage);
        location.reload();
    }else {
        startPage = 1;
        localStorage.setItem('startPage', startPage);
        location.reload();
    }
}
console.log(startPage);

const divBtn = document.createElement('div');
divBtn.classList.add('btn');
divBtn.append(btnPrev, btnNext);
div.appendChild(divBtn);
document.body.appendChild(div);



