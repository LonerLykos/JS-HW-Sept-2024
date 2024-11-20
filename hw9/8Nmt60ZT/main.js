// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


let headStyle = document.createElement("style");
headStyle.innerText = `.alpha{background: lightgray}`;
document.head.appendChild(headStyle);
// думав спробувати запиляти стайл в хед, але не дав ради, як додати внутрянку для них


const div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.fontSize = '24px';
const p = document.createElement('p');
p.style.color = 'orange';
document.body.appendChild(div);
div.appendChild(p);
p.innerText = 'lorem ipsum';

const nodeClone = div.cloneNode(true);

document.body.appendChild(nodeClone);
