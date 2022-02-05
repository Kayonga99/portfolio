const btn = document.getElementById('btn');
const closeButton = document.getElementById('close');
const nav = document.querySelector('.nav');
const list = document.querySelectorAll('.common-li');
const ul = document.getElementById('project-box');
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
const projects = [
  {
    heading1: 'Profesional Art Printing Data',
    featuredImage: 'photos/bg-1.png',
    description: "A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    languages: ['html', 'bootsrap', 'Ruby'],
    linkLive: 'location.href=\'https:// https://kayonga99.github.io/portfolio/index.html\'',
    linkSource: 'https://github.com/Kayonga99/portfolio',
  },
  {
    heading1: 'Profesional Art Printing Data',
    featuredImage: 'photos/bg-1.png',
    description: "A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    languages: ['html', 'bootsrap', 'Ruby'],
    linkLive: 'location.href=\'https:// https://kayonga99.github.io/portfolio/index.html\'',
    linkSource: 'https://github.com/Kayonga99/portfolio',
  },
  {
    heading1: 'Profesional Art Printing Data',
    featuredImage: 'photos/bg-1.png',
    description: "A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    languages: ['html', 'bootsrap', 'Ruby'],
    linkLive: 'location.href=\'https:// https://kayonga99.github.io/portfolio/index.html\'',
    linkSource: 'https://github.com/Kayonga99/portfolio',
  },
  {
    heading1: 'Profesional Art Printing Data',
    featuredImage: 'photos/bg-1.png',
    description: "A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    languages: ['html', 'bootsrap', 'Ruby'],
    linkLive: 'location.href=\'https:// https://kayonga99.github.io/portfolio/index.html\'',
    linkSource: 'https://github.com/Kayonga99/portfolio',
  },
  {
    heading1: 'Profesional Art Printing Data',
    featuredImage: 'photos/bg-1.png',
    description: "A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    languages: ['html', 'bootsrap', 'Ruby'],
    linkLive: 'location.href=\'https:// https://kayonga99.github.io/portfolio/index.html\'',
    linkSource: 'https://github.com/Kayonga99/portfolio',
  },
  {
    heading1: 'Profesional Art Printing Data',
    featuredImage: 'photos/bg-1.png',
    description: "A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    languages: ['html', 'bootsrap', 'Ruby'],
    linkLive: 'location.href=\'https:// https://kayonga99.github.io/portfolio/index.html\'',
    linkSource: 'https://github.com/Kayonga99/portfolio',
  },
];
projects.forEach((project, i) => {
  const temp = document.createElement('template');
  let tech = '';
  project.languages.forEach((lang) => {
    tech += `<li class="buttons font-f">${lang}</li>`;
  });
  temp.innerHTML = `
  <li class="size">
          <div class="temp2  common-${i} hover">
            <div class="pad">
              <h3 class="work card-heading">${project.heading1}</h3>
              <p class="text text-2">
              ${project.description}
              </p>
              <ul class="tech tech-2">
               ${tech}
              </ul>
            </div>
            <button type="submit" class="btn btns btn-2 d-none">see project</button>
          </div>
        </li>
  `;
  const card = temp.content;
  ul.appendChild(card);
});

const cards = document.querySelectorAll('.temp2')


console.log(cards);
const seeProjectBtns = document.querySelectorAll('.btns');
const popup = document.querySelector('.bgpopup');
const closePopupBtn = document.getElementById('close-popup');
seeProjectBtns.forEach((element) => {
  element.addEventListener('click', () => {
    popup.style.display = 'block';
  });
});
closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    seeProjectBtns.forEach((element) => {

      element.style.display = 'block';
    })
  })
})

// form validation
const formValidation = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form = document.getElementById('form')

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = mail.value;
//   if (!isLowerCase(email)) {
//     errorMessage.style.display = 'block';
//   } else {
//     errorMessage.style.display = 'none';
//     form.submit();
//   }
// });
// form.addEventListener('submit', (e) => {
// let msg = []
// if (formValidation.value === '' || formValidation.value == null){
//   msg.push('Enter name')
// }
// if (msg.length > 0){
//   e.preventDefault()
// }
// })

