

let menu = document.getElementById('hamburger');
let navLeft = document.getElementById('nav-left');

menu.addEventListener('click',()=>{
    navLeft.style.scale = '1';

})

let closenav = document.querySelector('#nav-left>i.close');
console.log(closenav)

closenav.addEventListener('click',()=>{
    navLeft.style.scale='0';
})