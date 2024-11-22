// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const span = document.querySelector('span');
console.log(span);
let storageNum = +localStorage.getItem('storageNum');
storageNum += 1;
localStorage.setItem('storageNum', storageNum);

span.textContent = storageNum;
