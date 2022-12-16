const moreBtn = document.querySelector('.info .meta .titleAndButton .more');
const title = document.querySelector('.info .meta .titleAndButton .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});