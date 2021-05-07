const container = document.querySelector('.container');
let counter = 0;
while (counter <= 100) {
    const block = document.createElement('div');
    block.classList.add('block');
    container.appendChild(block);
    counter++;
}

function animationBlocks() {
    anime({
        targets: '.block',
        translateX: () => {
            return anime.random(-1000,1000)
        },
        translateY: () => {
            return anime.random(-500,500)
        },
        scale: () => {
            return anime.random(1,4)
        },
        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(10),
        complete: animationBlocks,
    });
};

animationBlocks();
