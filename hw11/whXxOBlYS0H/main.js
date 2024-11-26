// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes?limit=0')
    .then(res => res.json())
    .then(resp => {
        let {recipes} = resp;

        console.log(recipes[0]);
        const divCarts = document.createElement('div');
        divCarts.classList.add('carts');
        document.body.appendChild(divCarts);

        function createDom(arr) {
            const ulBase = document.createElement('ul');

            arr.forEach(cart => {
                const li = document.createElement('li');

                if (Array.isArray(cart)) {
                    const ulSub = createDom(cart);
                    li.appendChild(ulSub);
                } else if (typeof cart === 'object') {
                    const ulSub = createForObject(cart);
                    li.appendChild(ulSub);
                } else {
                    li.textContent = cart;
                }
                ulBase.appendChild(li);
            });
            return ulBase;
        }


        function createForObject(obj) {
            const ul = document.createElement('ul');

            for (const key in obj) {
                const li = document.createElement('li');


                if (Array.isArray(obj[key])) {
                    const ulSub = createDom(obj[key]);
                    li.textContent = `${key}: `;
                    li.appendChild(ulSub);
                } else if (typeof obj[key] === 'object') {
                    const ulSub = createForObject(obj[key]);
                    li.textContent = `${key}: `;
                    li.appendChild(ulSub);
                } else {
                    li.textContent = `${key}: ${obj[key]}`;
                }
                ul.appendChild(li);
            }

            return ul;
        }

        const creator = createDom(recipes);
        divCarts.appendChild(creator);
        document.body.appendChild(divCarts);

    });


