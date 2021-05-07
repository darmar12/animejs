const container = document.querySelector('.container');
let counter = 0;
while (counter <= 100) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    container.appendChild(bubble);
    counter++;
};

function animationBlocks() {
    anime({
        targets: '.bubble',
        translateX: () => {
            return anime.random(-900,900)
        },
        translateY: () => {
            return anime.random(-100,-1000)
        },
        scale: () => {
            return anime.random(1,2)
        },
        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(10),
        complete: animationBlocks,
    });
};

animationBlocks();
