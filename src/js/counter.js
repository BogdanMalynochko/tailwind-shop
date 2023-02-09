export let count = () => {
    window.addEventListener('click', (e) => {
        if (e.target && e.target.dataset.action === 'plus' || e.target && e.target.dataset.action === 'minus') {
            let counterWrapp = e.target.closest('.item'),
                number = counterWrapp.querySelector('.counter_number');

            if (e.target && e.target.dataset.action === 'plus') {
                number.innerText = ++number.innerText;
            } 
    
            if (e.target && e.target.dataset.action === 'minus') {
                if (parseInt(number.innerText) > 1) {
                    number.innerText = --number.innerText;  
                }
            } 
        }
    })
};