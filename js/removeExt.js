if (location.href.endsWith('.html')) {
    history.replaceState(null, null, location.href.slice(0, -5));
}

let docTitle = document.title;

window.addEventListener('blur', () => {
    document.title = 'Come back';
});

window.addEventListener('focus', () => {
    document.title = docTitle;
})