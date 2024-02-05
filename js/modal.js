const activeBtn = document.getElementById('showModal');
const modal = document.getElementById('modal');
const background = document.createElement('div');

const open = () => {

    const statys = modal.getAttribute('style');
    if (statys === 'display: none;') {
        modal.removeAttribute('style');
        modal.setAttribute('style', 'display: block;');
    }
};


const close = () => {
    const statys = modal.getAttribute('style');
    if (statys === 'display: block;') {
        modal.removeAttribute('style');
        modal.setAttribute('style', 'display: none;');
    }
    background.remove();
}

activeBtn.addEventListener('click', () => {
    background.classList.add('modal-layer');
    open();
    background.addEventListener('click', () => {
        close();
    })
    document.body.append(background);
});