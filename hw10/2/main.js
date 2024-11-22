// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const input = document.createElement('input');
input.name = 'userAge';
input.type = 'text';
input.placeholder = "Ваш вік";
input.required = true;
const button = document.createElement('button');
button.textContent = 'submit';
button.type = 'submit';
button.onclick = () => {
    const age = +input.value;
    if (!isNaN(age)) {
        if (input.value >= 18) {
            const p = document.createElement('p');
            p.textContent = 'а ви дорослий)';
            document.body.appendChild(p);
        } else if (age < 18) {
            const p = document.createElement('p');
            p.textContent = 'ще треба підрости)';
            document.body.appendChild(p);
        }
    } else {
        const p = document.createElement('p');
        p.textContent = 'Вводити тільки цифри';
        document.body.appendChild(p);
    }
}

document.body.append(input, button);
