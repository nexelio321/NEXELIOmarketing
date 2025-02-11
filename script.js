// Smooth scroll to services
document.querySelector(".explore-btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
});

// Video fallback check for mobile
window.onload = function () {
    let video = document.getElementById("hero-video");
    if (window.innerWidth < 768) {
        video.style.display = "none";
    }
};
