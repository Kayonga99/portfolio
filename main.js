const btn= document.getElementById('btn');

const nav= document.querySelector('.nav-list');

function navList() {

nav.classList.add('nav-list-menu');
}

btn.addEventListener('click', navList);