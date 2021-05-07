const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, '<span class="litter">$&</span>');

const animation = anime.timeline({
    loop: true,
});

animation.add({
    targets: '.litter',
    translateY: [-600, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 5000,
    delay: anime.stagger(200),
})

