const btn = document.getElementById('btn');
const closeButton = document.getElementById('close');
const nav = document.querySelector('.nav');
const list = document.querySelectorAll('.common-li');
const seeProjectBtns = document.querySelectorAll('.btns')
const popup = document.querySelector('.bgpopup')
const closePopupBtn = document.getElementById('close-popup')

console.log(closePopupBtn);
function closeBtn() {
  nav.classList.remove('nav-list-menu');
}

function navList() {
  nav.classList.add('nav-list-menu');
}

function openPopup() {
  popup.style.display = 'block';
}

function closePopup() {
  popup.style.display = 'none';
}

list.forEach((element) => {
  element.addEventListener('click', closeBtn);
});
btn.addEventListener('click', navList);
closeButton.addEventListener('click', closeBtn);

seeProjectBtns.forEach(element => {
  element.addEventListener('click', openPopup )
});

closePopupBtn.addEventListener('click', closePopup)