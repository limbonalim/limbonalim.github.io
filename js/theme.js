const icon = document.getElementById('upper-icon');

document.addEventListener("DOMContentLoaded", () => {
    init()
})

function init() {
    if (localStorage.getItem('theme')) {
        document.documentElement.setAttribute("theme", "white");
        icon.setAttribute('href', 'images/Logo-Primary.png');
    } else {
        document.documentElement.removeAttribute("theme");
        icon.setAttribute('href', 'images/Logo-Default.png');
    }

}
const toggleBtn = document.getElementById("toggle-white");
toggleBtn.addEventListener("click", () => {
    if (document.documentElement.hasAttribute("theme")) {
        document.documentElement.removeAttribute("theme");
        localStorage.removeItem('theme');
        icon.setAttribute('href', 'images/Logo-Default.png');
    } else {
        document.documentElement.setAttribute("theme", "white");
        localStorage.setItem('theme', 1);
        icon.setAttribute('href', 'images/Logo-Primary.png');
    }
});