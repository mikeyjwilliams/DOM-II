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
 * 7. keyup -> focuses on specific nav item by first letter of nav item.
 *      h => home, a => about us, b => blog, c => contact
 *  if clicked it turns the nav item into a button with tan background.
 */
const bodyListen = document.querySelector('body');
bodyListen.addEventListener('keyup', event => {
    let navLink; // value for link.
    let keyPressed = event.key; // key pressed after screen is clicked.
    switch (keyPressed) {
        case 'h':
            navLink = document.querySelectorAll('.nav-link')[0];
            break;
        case 'a':
            navLink = document.querySelectorAll('.nav-link')[1];
            break;
        case 'b':
            navLink = document.querySelectorAll('.nav-link')[2];
            break;
        case 'c':
            navLink = document.querySelectorAll('.nav-link')[3];
            break;
        default:
            console.log('not there');
            break;
    }
    if (!navLink.classList.contains('btn')) {
        navLink.style.backgroundColor = '#F1D0B7';
        navLink.classList.toggle('btn');
    } else {
        navLink.classList.toggle('btn');
        navLink.style.backgroundColor = 'white';
    }
});





/**
 * 1. mouseover
 * 2. mouseout
 * 3. dbclick
 * 4. focus
 * 5. contextmenu
 * 6. mousedown
 * 7. keyup
 */

/**
 * navigation stopped from refreshing page.
 */
const navPreventDefault = document.querySelectorAll('.nav-link');
navPreventDefault.forEach(navItem => {
    navItem.addEventListener('click', e => {
        e.preventDefault();
    });
});