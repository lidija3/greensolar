const btnLearnMore = document.querySelector('.btnLearnMore');
const btnContact = document.querySelector('.btnContact');
const btnContact2 = document.querySelector('.btnContact2');

const btnFormSend = document.querySelector('.btnFormSend');
const conformation = document.querySelector('.conformation');
const btnConformation = document.querySelector('.btnConformation');

const form = document.querySelector('#form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const message = document.querySelector('#message');

const hamburger = document.querySelector('.hamburger');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const btnScrollToTop = document.querySelector('.btnScrollToTop');
const mobileNavLink = document.querySelectorAll('.mobile-nav-link');
const main = document.querySelector('main');
const contact = document.querySelector('.contact');

const landingContainer = document.querySelector('.landingContainer');

btnLearnMore.addEventListener('click', () => {
    window.location = "#benefits";
})

btnContact.addEventListener('click', () => {
    window.location = "#contact";
})

btnContact2.addEventListener('click', () => {
    window.location = "#contact";
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    conformation.classList.add('popup');
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    number.value = '';
    message.value = '';
})

function closePopup(){
    conformation.classList.remove('popup');
}

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNavMenu.classList.toggle('active');
    main.classList.toggle('fixed-position');
    landingContainer.classList.toggle('inactive');
})

mobileNavLink.forEach(item => item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNavMenu.classList.remove('active');
    landingContainer.classList.remove('inactive');
}))