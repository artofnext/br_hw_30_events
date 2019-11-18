let resElem = document.getElementById('text__container');
let handle = document.createElement('div');
handle.classList.add('handle');
resElem.appendChild(handle);
document.body.addEventListener('mousedown', initResize);
document.body.addEventListener('mouseup', stopResize);
// document.body.addEventListener('mouseout', stopResize);

let startX;
let startY;

function initResize(e) {
    console.log('Mouse down');
    if (e.target == handle) {
        e.preventDefault();
        // startX = resElem.getBoundingClientRect().left;
        // startY = resElem.getBoundingClientRect().top;
        
        // console.log(startX + ':' + startY);

        document.body.addEventListener('mousemove',adjustCoords);
    }
}

function adjustCoords(e) {
    // console.log(e.clientX + ":" + e.clientY);
    // console.log((resElem.offsetWidth - resElem.style.width) + ":" + (resElem.offsetHeight - resElem.style.height));
    resElem.style.width = e.clientX - resElem.getBoundingClientRect().left - 20 + 'px';//magic number adjust elements paddings
    resElem.style.height = e.clientY - resElem.getBoundingClientRect().top - 25 + 'px';
    
}

function stopResize(e) {
    console.log('Mouse up');
    document.body.removeEventListener('mousemove',adjustCoords);
}