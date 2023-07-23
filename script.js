const button = document.querySelector('.button');
const nav = document.querySelector('.navBar');

button.addEventListener('click',() => {
    nav.classList.toggle('active');
})
