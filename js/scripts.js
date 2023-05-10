'use strict';

const img = document.querySelectorAll('img');

img.forEach(elem => {

    const div = document.querySelector('#obraz');

    elem.addEventListener('click', () => {

        const big = elem.src.replace('_min', '');

        console.log(big);

        div.src = big;
    });
});