// #Kx1xgoKy8
// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


let courses = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const cours of courses) {
    const div = document.createElement('div');
    div.classList.add('item');
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `${cours.title}`;
    const p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `monthDuration: ${cours.monthDuration}`;
    div.append(h1, p);
    document.body.appendChild(div);
}

//так як в дз сказано зробити саме h1 то робив ними, хоча більше одного h1 на сторінку не має бути