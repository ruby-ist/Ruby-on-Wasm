function logoAnimate(){
    gsap.timeline().to('#ruby', {
        scaleX: 0,
        transformOrigin: "center",
        duration: 0.2
    }).to('#ruby', {
        scaleX: 1,
        transformOrigin: "center",
        duration: 0.15
    }).to('#ruby', {
        scaleX: 0,
        transformOrigin: "center",
        duration: 0.15
    }).to('#ruby', {
        scaleX: 1,
        transformOrigin: "center",
        duration: 0.4
    }).from('#tag', {
        scale: 0,
        transformOrigin: "top center",
        delay: -0.1,
        duration: 0.5
    }).from('#line', {
        scale: 0.95,
        opacity: 0,
        duration: 1
    });
}

logoAnimate();