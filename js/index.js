// Your code goes here
/**  list of listeners
 * 
 * 1. mouseover
 * 2. mouseout
 * 3. dbclick
 * 4. focus
 * 5. contextmenu
 * 6. mousedown
 * 7. keyup
 * 8. click
 * 9. mouseleave
 * 10. resize
 */


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

});

/**
 * 7. keyup -> focuses on specific nav item by first letter of nav item.
 *      h => home, a => about us, b => blog, c => contact
 *  if clicked it turns the nav item into a button with tan background.
 */
//const bodyListen = document.querySelector('body');
// on window to emulate using just the keyboard to click on specific navigation links.
window.addEventListener('keyup', event => {
    let navLink = document.querySelector('.nav-link'); // value for link.
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
    let nav = navLink;
    if (!nav.classList.contains('btn')) {
        nav.style.backgroundColor = '#F1D0B7';
        nav.classList.toggle('btn');
    } else {
        nav.classList.toggle('btn');
        nav.style.backgroundColor = 'white';
    }
});

/**
 * 8. click => fun in sun button -> hides text in p above it. then click 
 * 
 * 1. change the sign up button to say what it does.
 * 2. seclet the button, 
 */
const funText = document.querySelectorAll('.destination p')[0];
const btnHideTxt = 'click to hide par.';
const destinationButton = document.querySelectorAll('.destination .btn')[0];
destinationButton.textContent = btnHideTxt;
//console.log(destintationButton);
destinationButton.addEventListener('click', event => {
    let buttonText = destinationButton.textContent;
    if (!funText.classList.contains('hideWords')) {
        funText.classList.toggle('hideWords');
        destinationButton.textContent = btnHideTxt;
    } else if (funText.classList.contains('hideWords')) {
        destinationButton.textContent = 'click to show text';
        funText.classList.toggle('hideWords');
    }
});

/**
 * 9. mouseleave -> mouse red border on lets's go photo on mouse leave.
 */
const letsGoImg = document.querySelectorAll('.content-section .img-content img')[0];
letsGoImg.addEventListener('mouseleave', event => {
    event.target.style.border = '3px solid #17A2B8';
    event.target.style.borderRadius = '10px';

    setTimeout(function () {
        event.target.style.border = '';
    }, 2000);
}, false);

/**
 * 10. resize
 */
const funBusHideResize = document.querySelector('.intro img');
window.addEventListener('resize', event => {
    if (window.innerWidth < 500) {
        funBusHideResize.style.display = 'none';
    } else {
        funBusHideResize.style.display = 'inline-block';
    }
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