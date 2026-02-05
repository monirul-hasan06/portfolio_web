function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

// Navbar scroll effect (optional)
window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    nav.style.background = window.scrollY > 50 ? "#000" : "#222";
});
