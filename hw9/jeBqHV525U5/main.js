// #jeBqHV525U5
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let courses = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const ulList = document.createElement('ul');
for (const cours of courses) {
    const li = document.createElement('li')
    li.innerText = `${cours.title}, monthDuration: ${cours.monthDuration}`;
    ulList.appendChild(li);
}
document.body.appendChild(ulList);