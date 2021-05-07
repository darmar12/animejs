const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, '<span class="litter">$&</span>');

const animation = anime.timeline({
    targets: '.litter',
    easing: 'easeInOutExpo',
    loop: true,
});

animation.add({
    rotate: () => {
        return anime.random(-360,360)
    },
    translateX: () => {
        return anime.random(-500,500)
    },
    translateY: () => {
        return anime.random(-500,500)
    },
    duration: 5000,
    delay: anime.stagger(20)
});

animation.add({
    rotate: 0,
    translateX: 0,
    translateY: 0,
    duration: 5000,
    delay: anime.stagger(20)
});