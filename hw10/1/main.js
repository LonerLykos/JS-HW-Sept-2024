// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const parag = document.createElement('p');
parag.id = 'text';
parag.textContent = 'Hello World!';
document.body.appendChild(parag);
const button = document.createElement('button');
document.body.appendChild(button);
button.textContent = 'hiden';
button.onclick = function () {
    document.body.removeChild(document.getElementById('text'));
}


