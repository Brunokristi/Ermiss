cgsap.set('.wrapper', { xPercent: -50, yPercent: -50 });

var boxWidth = 300,
    totalWidth = boxWidth * 6 + 200,  // * n of boxes + diff textBox
    time = 20,
    no01 = document.querySelectorAll("#no01 .box"),
    dirFromLeft = "+=" + totalWidth,
    dirFromRight = "-=" + totalWidth;

var mod = gsap.utils.wrap(0, totalWidth);

gsap.set(no01, {
    x: function (i) {
        return i * boxWidth;
    }
});

var action = gsap.timeline()
    .to(no01, {
        x: dirFromLeft,
        modifiers: {
            x: x => mod(parseFloat(x)) + "px"
        },
        duration: time,
        ease: 'none',
        repeat: -1
    });