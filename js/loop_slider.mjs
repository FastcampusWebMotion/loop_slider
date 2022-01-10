import Animate from './animate.mjs';

const slider = document.querySelector('#slider');
const ul = slider.querySelector('ul');
const prev = slider.querySelector('.prev');
const next = slider.querySelector('.next');

ul.style.left = '-100%';

next.addEventListener('click', e=>{
    e.preventDefault();

    new Animate(ul,{
        prop: 'left',
        value: '-200%',
        duration: 1000,
        callback: ()=>{
            ul.style.left = '-100%';
            ul.append(ul.firstElementChild);
        }
    })
})

prev.addEventListener('click', e=>{
    e.preventDefault();

    new Animate(ul, {
        prop: 'left',
        value: '0%',
        duration: 1000,
        callback: ()=>{
            ul.style.left = '-100%',
            ul.prepend(ul.lastElementChild);
        }
    })
})