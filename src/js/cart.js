export let cart = () => {
    let cartBtn = document.querySelector('.cart_btn'),
        cart = document.querySelector('.cart');

    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cart.classList.toggle('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('btn_flower')) {
            let itemWrapp = e.target.closest('.item'),
                info = {
                    id: itemWrapp.dataset.id,
                    imgSrc: itemWrapp.querySelector('img').getAttribute('src'),
                    title: itemWrapp.querySelector('h3').innerText,
                    number: itemWrapp.querySelector('.counter_number').innerText,
                }

            let itemInCart = cart.querySelector(`[data-id="${info.id}"]`);
            if (itemInCart) {
                let numberInCart = itemInCart.querySelector('.number span');
                numberInCart.innerText = parseInt(numberInCart.innerText) + parseInt(info.number);
            } else {
                cart.innerHTML += `
                    <div class="cart-wrapper-item" data-id=${info.id}>
                        <div>
                            <div class="cart-info">
                                <h4>Name: ${info.title}</h4>
                                <p class="number">Number: <span>${info.number}</span></p>
                            </div>
                            <div><img class="remove_btn" src="src/img/delete-icon.svg"></div>
                        </div>
                        <img src="${info.imgSrc}">
                        <hr>
                    </div>
                ` 
            }
            itemWrapp.querySelector('.counter_number').innerText = '1';
            cart.classList.remove('hidden');
            window.scrollTo({top: 0, behavior: 'smooth'});
        };

        if (e.target && e.target.classList.contains('remove_btn')) {
            let itemWrapp = e.target.closest('.cart-wrapper-item')
            itemWrapp.remove();
        }
    });
};