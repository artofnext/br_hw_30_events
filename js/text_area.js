let divText = document.getElementById('text_div');
// let divText1 = document.getElementById('text_div1');
let areaText = document.getElementById('text_area');

areaText.style.overflow = 'hidden';
areaText.style.resize = 'none';

divText.addEventListener('click',activateInput);
document.body.addEventListener('keydown',keypressHandler);
areaText.addEventListener('input',resizeArea);
areaText.style.display = 'none';

function activateInput(e) {
    // divText.style.visibility = 'hidden';
    // divText.style.display = 'none';
    // areaText.style.display = 'initial';
    // areaText.value = divText.innerText.trim();
    // areaText.focus();
    activateTextarea();
    
}

function keypressHandler(e) {
    if (e.code == "KeyE" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        console.log("Ctr + E pressed");
        activateTextarea();
    }
    if (e.code == "KeyS" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        console.log("Ctr + S pressed");
        deactivateTextarea();
    }
}

function activateTextarea() {
    divText.style.visibility = 'hidden';
    divText.style.display = 'none';
    areaText.style.display = 'initial';
    areaText.value = divText.innerText.trim();
    areaText.focus();
}

function deactivateTextarea() {
    divText.style.visibility = 'visible';
    divText.style.display = 'initial';
    areaText.style.display = 'none';
    divText.innerText.trim() = areaText.value;
    // areaText.focus();
}

function resizeArea(e) {


    divText.innerText = areaText.value;

    divText.style.visibility = 'hidden';
    divText.style.display = 'block';

    areaText.style.height = divText.offsetHeight - 12 + 'px';

    divText.style.visibility = 'visible';
    divText.style.display = 'none';

    // divText1.innerText = areaText.value;
    // areaText.style.height = divText.offsetHeight + 'px';
    // areaText.style.width = divText.offsetWidth + 'px';
    // areaText.rows = divText.offsetHeight / 12;
    // areaText.style.width = divText.scrollWidth + 'px';
    // console.log('Div Height: ' + divText.offsetHeight + 'px');
    // console.log('Div width: ' + divText.offsetWidth + 'px');
    // console.table(e.scrollWidth);
}

// alert('Here!')

