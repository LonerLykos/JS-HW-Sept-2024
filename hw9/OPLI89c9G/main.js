// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


let arr = ['Main','Products','About us','Contacts'];

const ulList = document.createElement('ul');
for (const item of arr) {
    const li = document.createElement('li');
    li.innerText = item;
    ulList.appendChild(li);
}
document.body.appendChild(ulList);