// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const span = document.getElementById('money');
let value = +JSON.parse(localStorage.getItem('value'));
if (value < 100) {
    value = 100;
}
span.textContent = `${value} грн`;



let storageTime = +JSON.parse(localStorage.getItem('storageTime')) || 0;
console.log(storageTime);

let thisTime = new Date().getTime();
console.log(thisTime);
if (thisTime > (storageTime + 10000)) {
    localStorage.setItem('storageTime', JSON.stringify(thisTime));
    let newValue = value + 10;
    localStorage.setItem('value', JSON.stringify(newValue));
}

