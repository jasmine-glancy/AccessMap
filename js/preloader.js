//after window is loaded completely 
let preloader = document.querySelector('.preloader')

window.addEventListener('load', vanish)

function vanish(){
    preloader.classList.add('disappear')
}
