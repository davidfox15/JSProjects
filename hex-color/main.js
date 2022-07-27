function hexChange() {
    let page = document.getElementById('back-color');
    let text = document.getElementById('hex-text');
    let color = hexGenerate()
    page.style.backgroundColor = color;
    text.textContent = color;
}

function hexGenerate() {
    let letters = '0123456789ABCDEF';
    let color ='#';

    for(i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }

    return color;
}