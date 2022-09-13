'use strict';

document.querySelector('.filter-list').addEventListener('click', (event) => {
    if (event.target.classList.contains('filter-list-title')) {
        event.preventDefault();
        event.target.nextElementSibling.classList.toggle('d-block');
    }
});
