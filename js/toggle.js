const button = document.getElementById('headerToggle');
const navigation = document.getElementById('navigation');
const social = document.getElementById('social');
const toggleBlock = document.getElementById('toggle-block');
const height = navigation.offsetHeight+social.offsetHeight;
const point = 431;

button.addEventListener('click', () => {
    if (toggleBlock.classList.contains('hidden')) {
        button.classList.add('btn_toggle_close');
        toggleBlock.classList.remove('hidden');
        toggleBlock.style.height = `${height}px`;
    } else {
        button.classList.remove('btn_toggle_close');
        toggleBlock.classList.add('hidden');
        toggleBlock.style.height = '0px';
    }
})

window.addEventListener("resize", resizeHandler, false);

function resizeHandler() {
    let heightNav = height;
    if (document.documentElement.clientWidth >= point) {
        toggleBlock.style.height = 'auto';
    } else {
        if (toggleBlock.classList.contains('nav-hidden')) {
            toggleBlock.style.height = 0;
            toggleBlock.classList.add('hidden');
        } else {
            toggleBlock.style.height = heightNav + 'px';
            toggleBlock.classList.remove('hidden');
            button.classList.add('btn_toggle_close');
        }
    }
}