let resElem = document.getElementById('text__container');
let handle = document.createElement('div');
handle.classList.add('handle');
resElem.appendChild(handle);
handle.addEventListener('mousedown', adjustCoords);
handle.addEventListener('mouseup', setCoords);

function adjustCoords(e) {
    console.log('Mouse down');

    
}

function setCoords(e) {
    console.log('Mouse up');
}