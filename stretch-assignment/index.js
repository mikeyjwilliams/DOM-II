
const allBlocks = document.querySelectorAll('.block'); // class on all block items
const blocksSection = document.querySelector('.blocks'); // class around all blocks.

const redBlock = document.querySelector('.block--red');
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');


allBlocks.forEach(block => {
    
    block.addEventListener('click', e => {
        if(e.target !== blocksSection.firstElementChild) {
            blocksSection.prepend(e.currentTarget);
            
        }
    })
});
