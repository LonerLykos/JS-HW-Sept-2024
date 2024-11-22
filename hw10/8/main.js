// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const form = document.createElement('form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
const inputRows = document.createElement('input');
inputRows.name = 'inputRows';
inputRows.type = 'number';
inputRows.placeholder = 'Enter rows counter';
const inputColumns = document.createElement('input');
inputColumns.name = 'inputColumns';
inputColumns.type = 'number';
inputColumns.placeholder = 'Enter columns counter';
const inputText = document.createElement('input');
inputText.name = 'inputText';
inputText.type = 'text';
inputText.placeholder = 'Enter your text. For separation put ";"';
const button = document.createElement('button');
button.type = 'Submit';
button.textContent = 'Submit';
form.append(inputRows, inputColumns, inputText, button);
document.body.appendChild(form);
button.onclick = function (ev) {
    ev.preventDefault();
    const divFromForm = document.createElement('div');
    divFromForm.style.display = 'grid';
    divFromForm.style.gridTemplateRows = `repeat(${inputRows.value}, 1fr)`;
    divFromForm.style.gridTemplateColumns = `repeat(${inputColumns.value}, 1fr)`;
    const splitInputText = inputText.value.split(';');
    splitInputText.forEach((item) => {
        const pText = document.createElement('p');
        pText.textContent = item;
        pText.style.textAlign = 'center';
        divFromForm.appendChild(pText);
    });
    document.body.appendChild(divFromForm);
}




