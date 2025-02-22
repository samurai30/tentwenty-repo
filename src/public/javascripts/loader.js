
const svgPath = document.querySelectorAll('.svg_text_logo');
 
const svgText = anime({
    targets: svgPath,
    loop: true,
    direction: 'alternate',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: (el, i) => { return i * 500 }
});