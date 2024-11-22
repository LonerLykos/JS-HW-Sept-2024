// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const divToLb = document.createElement('div');
divToLb.className = 'divToLb';
const inputForLb = document.createElement('input');
inputForLb.name = 'converterKgToLb';
inputForLb.type = 'number';
inputForLb.placeholder="Ведіть вагу в кг";
const pForLb = document.createElement('p');
inputForLb.oninput = function () {
    let value = inputForLb.value / 2.2046;
    pForLb.textContent = `${value.toFixed(2)} lb`;
};
divToLb.append(inputForLb, pForLb);



const divToKg = document.createElement('div');
divToKg.className = 'divToKg';
const inputForKg = document.createElement('input');
inputForKg.name = 'converterLbToKg';
inputForKg.type = 'number';
inputForKg.placeholder="Ведіть вагу в фунтах";
const pForKg = document.createElement('p');
inputForKg.oninput = function () {
    let value = inputForKg.value * 2.2046;
    pForKg.textContent = `${value.toFixed(2)} kg`;
};

divToKg.append(inputForKg, pForKg);


document.body.append(divToLb, divToKg);