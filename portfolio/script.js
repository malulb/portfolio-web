function toggleMenu() {
    const menu = document.querySelector(".burger-menu-links");
    const icon = document.querySelector(".burger-menu-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}