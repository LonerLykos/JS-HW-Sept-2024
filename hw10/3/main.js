// #ymAmN2xJ
// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form = document.createElement('form');
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');
input1.name = 'userName';
input1.type = 'text';
input1.placeholder="Ваше ім'я";
input1.required = true;
input2.name = 'userSurname';
input2.type = 'text';
input2.placeholder="Ваше прізвище";
input2.required = true;
input3.name = 'userAge';
input3.type = 'number';
input3.placeholder="Ваш вік";
input3.required = true;
const button = document.createElement('button');
button.textContent = 'submit';
button.type = 'submit';
button.onclick = function (event) {
    event.preventDefault();
    const h3 = document.createElement('h3');
    h3.textContent = `${input1.value}`;
    const p = document.createElement('p');
    p.textContent = `${input2.value}`;
    const p2 = document.createElement('p');
    p2.textContent = `${input3.value}`;
    const user = document.createElement('div');
    user.append(h3, p, p2);
    document.body.appendChild(user);
}
form.append(input1, input2, input3, button);
document.body.append(form);