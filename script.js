document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    // Smooth Scrolling
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelectorAll("nav ul li a").forEach(a => a.classList.remove("active"));
            this.classList.add("active");

            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // GSAP Animation on Load
    gsap.from(".hero-text h1", { duration: 1.2, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".hero-text p", { duration: 1.5, y: 50, opacity: 0, ease: "power2.out", delay: 0.5 });
    gsap.from(".btn", { duration: 1, opacity: 0, scale: 0.8, ease: "power2.out", delay: 1 });
});
