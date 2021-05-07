anime({
    targets: '.image:nth-child(1)',
    translateX: () => { return anime.random(0, 700); },
    translateY: () => { return anime.random(100, 400); },
    scale: () => { return anime.random(0.5, 1); },
    rotate: () => { return anime.random(15, 75); },
    borderRadius: () => { return ['50%', anime.random(10, 35) + '%']; },
    duration: () => { return anime.random(1200, 1800); },
    delay: () => { return anime.random(0, 400); },
    easing: 'easeInOutExpo',
    direction: 'alternate',
    loop: true
});

anime({
    targets: '.image:nth-child(2)',
    translateX: () => { return anime.random(300, 500); },
    translateY: () => { return anime.random(-100, -300); },
    scale: () => { return anime.random(0.7, 1.4); },
    rotate: () => { return anime.random(15, 75); },
    borderRadius: () => { return ['50%', anime.random(10, 35) + '%']; },
    duration: () => { return anime.random(1200, 1800); },
    delay: () => { return anime.random(0, 400); },
    easing: 'easeInOutExpo',
    direction: 'alternate',
    loop: true
});

anime({
    targets: '.image:nth-child(3)',
    translateX: () => { return anime.random(0, -700); },
    translateY: () => { return anime.random(-300, 300); },
    scale: () => { return anime.random(0.5, 1.2); },
    rotate: () => { return anime.random(15, 75); },
    borderRadius: () => { return ['50%', anime.random(10, 35) + '%']; },
    duration: () => { return anime.random(1200, 1800); },
    delay: () => { return anime.random(0, 400); },
    easing: 'easeInOutExpo',
    direction: 'alternate',
    loop: true
});