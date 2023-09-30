document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 60; 
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
});