// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts?limit=0')
    .then(res => res.json())
    .then(item => {
        let {carts} = item;

        console.log(carts);
        const divCarts = document.createElement('div');
        divCarts.classList.add('carts');
        document.body.appendChild(divCarts);
        function createDom(arr, divCarts) {
            arr.forEach(cart => {
                const ulCart = document.createElement('ul');
                divCarts.appendChild(ulCart);
                for (const key in cart) {
                    if (typeof cart[key] === 'object') {
                        let cartItem = cart[key];
                        const liProduct = document.createElement('li');
                        ulCart.appendChild(liProduct);
                        createDom(cartItem, liProduct);
                    } else {
                        const li = document.createElement('li');
                        ulCart.appendChild(li);
                        const span = document.createElement('span');
                        span.textContent = `${key}: `;
                        const textNode = document.createTextNode(cart[key]);
                        li.append(span, textNode);
                    }
                }
            })
        }
        createDom(carts, divCarts);
    });




