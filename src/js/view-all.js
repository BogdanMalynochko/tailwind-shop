export let viewAll = (btn, flowers) => {
    let button = document.querySelector(btn),
        items = document.querySelectorAll(flowers);
        
    button.addEventListener('click', (e) => {
        e.preventDefault();
        items.forEach(element => {
            element.classList.remove('hidden');
        });
        button.remove();
    })
};