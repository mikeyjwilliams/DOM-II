
const allBlocks = blocksSection.querySelectorAll('.block'); // class on all block items
const blocksSection = document.querySelector('.blocks'); // class around all blocks.

const redBlock = blocksSection.querySelector('.block--red');
const blueBlock = blocksSection.querySelector('.block--blue');
const greenBlock = blocksSection.querySelector('.block--green');
const pinkBlock = blocksSection.querySelector('.block--pink');
const grayBlock = blocksSection.querySelector('.block--gray');


allBlocks.forEach(block => {
    
    block.addEventListener('click', e => {
        if(e.target !== blocksSection.firstElementChild) {
            blocksSection.prepend(e.target);
        }
    })
});
