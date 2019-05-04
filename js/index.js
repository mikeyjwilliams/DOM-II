// Your code goes here

/**
 * 1. mouseover .. navigation
 */
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
    navLink.addEventListener('mouseover', e => {
        e.target.style.color = '#17A2B8';
    })
});
/**
 * 2. mouseout .. navigation
 */
navLinks.forEach(navLink => {
    navLink.addEventListener('mouseout', event => {
        event.target.style.color = 'black';
    });
});
/**
 *  drag / drop.. in progress
 */
const contentImg = document.querySelector('.content-section img');
const contentText = document.querySelector('.content-section .text-content');

/**
 * 3. dbclick .. on destination boat.
 */
const destinationImg = document.querySelector('.content-destination img');
destinationImg.addEventListener('dblclick', event => {
    destinationImg.classList.toggle('large');
});

/**
 * 4. focus .. on nav-link contact
 */
const contactNavLink = document.querySelector('.nav-link');
contactNavLink.addEventListener('focus', (event) => {
    // console.log(contactNavLink);
    event.target.style.fontSize = '2rem';
});
/**
 * 5. contextmenu .preventDefault() -> disable select menu on imgs
 */

const noImgSelect = document.querySelectorAll('.img-content img');
noImgSelect.forEach(img => {
    img.addEventListener('contextmenu', event => {
        event.preventDefault();
    });
});

/**
 * 6. mousedown | 
 */
const signUpButtons = document.querySelectorAll('.destination .btn');
const secondSignUpButton = signUpButtons[1];
secondSignUpButton.addEventListener('mousedown', event => {
    const destinationHeader = document.querySelectorAll('.destination h4');
    const headerText = destinationHeader[1];
    headerText.textContent = 'Fun Bus Get Away!';
    console.log(headerText);
});






/**
 * navigation stopped from refreshing page.
 */
const navPreventDefault = document.querySelectorAll('.nav-link');
navPreventDefault.forEach(navItem => {
    navItem.addEventListener('click', e => {
        e.preventDefault();
    });
});