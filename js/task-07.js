const sizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

sizeControl.addEventListener('input', function () {
    const fontSize = sizeControl.value + 'px';
    textSpan.style.fontSize = fontSize;
});
