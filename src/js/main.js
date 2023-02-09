import {viewAll} from './view-all.js';
import {count} from './counter.js';
import {cart} from './cart.js';
import {openModal} from './modal.js';

window.addEventListener('DOMContentLoaded', () => {
    viewAll('.view_all', '.flower_shop .item');
    count();
    cart();
    openModal();
})