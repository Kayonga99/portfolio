const btn = document.getElementById('btn');
const nav = document.querySelector('.nav');
const list = document.querySelectorAll('.common-li');

function closeBtn() {
  nav.classList.remove('nav-list-menu');
}


function navList() {
  nav.classList.add('nav-list-menu');
}


list.forEach((element) => {
  element.addEventListener('click', closeBtn);
});
btn.addEventListener('click', navList);
closeButton.addEventListener('click', closeBtn);


