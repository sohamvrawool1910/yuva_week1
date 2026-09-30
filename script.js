// Nexora - Vanilla JavaScript
// Handles the responsive mobile menu and dynamic footer year.

const menuToggle = document.querySelector("#menuToggle");
const primaryMenu = document.querySelector("#primaryMenu");
const navLinks = document.querySelectorAll("#primaryMenu a");

function setMenuState(isOpen) {
    primaryMenu.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

menuToggle.addEventListener("click", () => {
    const isOpen = primaryMenu.classList.contains("open");
    setMenuState(!isOpen);
});

// Close the menu after a navigation link is selected on small screens.
navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
});

// Keep navigation consistent if the viewport is resized.
window.addEventListener("resize", () => {
    if (window.innerWidth > 700) setMenuState(false);
});

// Keep the copyright year current.
document.querySelector("#year").textContent = new Date().getFullYear();
