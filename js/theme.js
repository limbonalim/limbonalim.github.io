document.addEventListener("DOMContentLoaded", () => {
    init()
})

function init() {
    if (localStorage.getItem('theme')) {
        document.documentElement.setAttribute("theme", "white");
    } else {
        document.documentElement.removeAttribute("theme");
    }

}
const toggleBtn = document.getElementById("toggle-white");
toggleBtn.addEventListener("click", () => {
    if (document.documentElement.hasAttribute("theme")) {
        document.documentElement.removeAttribute("theme");
        localStorage.removeItem('theme');
    } else {
        document.documentElement.setAttribute("theme", "white");
        localStorage.setItem('theme', 1);
    }
});