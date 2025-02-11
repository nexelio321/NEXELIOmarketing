// Smooth scroll to services
document.querySelector(".explore-btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
});

