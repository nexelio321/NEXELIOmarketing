document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function () {
            document.querySelectorAll("nav ul li a").forEach(a => a.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
