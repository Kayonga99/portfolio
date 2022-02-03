const btn = document.getElementById('btn');
const closeButton = document.getElementById('close');
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

const projects = {
  project1: {
    heading1: 'Profesional Art Printing Data',
    featuredImage: 'photos/bg-1.png',
    description: "  A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    languages: ['html', 'bootsrap', 'Ruby'],
    linkLive: 'location.href=\'https:// https://kayonga99.github.io/portfolio/index.html\'',
    linkSource: "location.href=\'https://github.com/Kayonga99/portfolio'",
  },
  project1: {
    heading1: 'Profesional Art Printing Data',
    featuredImage: 'photos/bg-1.png',
    description: "  A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    languages: ['html', 'bootsrap', 'Ruby'],
    linkLive: 'location.href=\'https:// https://kayonga99.github.io/portfolio/index.html\'',
    linkSource: "location.href=\'https://github.com/Kayonga99/portfolio'",
  },
  project1: {
    heading1: 'Profesional Art Printing Data',
    featuredImage: 'photos/bg-1.png',
    description: "  A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    languages: ['html', 'bootsrap', 'Ruby'],
    linkLive: 'location.href=\'https:// https://kayonga99.github.io/portfolio/index.html\'',
    linkSource: "location.href=\'https://github.com/Kayonga99/portfolio'",
  },
  project1: {
    heading1: 'Profesional Art Printing Data',
    featuredImage: 'photos/bg-1.png',
    description: "  A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    languages: ['html', 'bootsrap', 'Ruby'],
    linkLive: 'location.href=\'https:// https://kayonga99.github.io/portfolio/index.html\'',
    linkSource: "location.href=\'https://github.com/Kayonga99/portfolio'",
  },
  project1: {
    heading1: 'Profesional Art Printing Data',
    featuredImage: 'photos/bg-1.png',
    description: "  A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    languages: ['html', 'bootsrap', 'Ruby'],
    linkLive: 'location.href=\'https:// https://kayonga99.github.io/portfolio/index.html\'',
    linkSource: "location.href=\'https://github.com/Kayonga99/portfolio'",
  },
  project1: {
    heading1: 'Profesional Art Printing Data',
    featuredImage: 'photos/bg-1.png',
    description: "  A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    languages: ['html', 'bootsrap', 'Ruby'],
    linkLive: 'location.href=\'https:// https://kayonga99.github.io/portfolio/index.html\'',
    linkSource: "location.href=\'https://github.com/Kayonga99/portfolio'",
  },
},
