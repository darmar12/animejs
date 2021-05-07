const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, '<span class="litter">$&</span>');

const animation = anime.timeline({
    loop: true,
});

animation.add({
    targets: '.litter',
    translateX: [0, -1000],
    opacity: [1, 0],
    easing: 'easeOutExpo',
    duration: 5000,
    delay: anime.stagger(200),
})

animation.add({
    targets: '.litter',
    translateX: [1000, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 5000,
    delay: anime.stagger(200),
})

