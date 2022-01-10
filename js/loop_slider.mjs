import Animate from './animate.mjs';

const slider = document.querySelector('#slider');
const ul = slider.querySelector('ul');
const prev = slider.querySelector('.prev');
const next = slider.querySelector('.next');
const speed = 2000;
let enableClick = true;

ul.style.left = '-100%';
ul.prepend(ul.lastElementChild);

next.addEventListener('click', e=>{
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        nextSlide();
    }    
})

prev.addEventListener('click', e=>{
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        prevSlide();
    }
    
})

function nextSlide(){
    new Animate(ul,{
        prop: 'left',
        value: '-200%',
        duration: speed,
        callback: ()=>{
            ul.style.left = '-100%';
            ul.append(ul.firstElementChild);
            enableClick = true;
        }
    })
}

function prevSlide(){
    new Animate(ul, {
        prop: 'left',
        value: '0%',
        duration: speed,
        callback: ()=>{
            ul.style.left = '-100%',
            ul.prepend(ul.lastElementChild);
            enableClick = true;
        }
    })
}