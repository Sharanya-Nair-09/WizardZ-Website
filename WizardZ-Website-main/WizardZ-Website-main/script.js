document.addEventListener("DOMContentLoaded", function () {

    // ================= NAV =================
    gsap.from("nav", {
        y: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // ================= HERO =================
    gsap.from(".hero-left h1, .centerpart1 h1", {
        x: -80,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });

    gsap.from(".hero-left p, .centerpart1 p", {
        x: -80,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out"
    });

    gsap.from(".hero-left button, .centerpart1 button", {
        x: -80,
        opacity: 0,
        duration: 1,
        delay: 0.9,
        ease: "power3.out"
    });

    gsap.from(".hero-right img, .centerpart2 img", {
        x: 80,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
    });

    // ================= SERVICES CARDS =================
    gsap.from(".card, .elem", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 1.2,
        ease: "power3.out"
    });

    // ================= PROCESS STEPS =================
    gsap.from(".step", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 1.5,
        ease: "back.out(1.7)"
    });

    // ================= TESTIMONIAL =================
    gsap.from(".testimonial-box", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 1.8,
        ease: "power3.out"
    });

    // ================= CTA =================
    gsap.from(".cta h2, .cta button", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 2,
        stagger: 0.2,
        ease: "power3.out"
    });

    // ================= FOOTER =================
    gsap.from("footer", {
        opacity: 0,
        duration: 1,
        delay: 2.2
    });

});
