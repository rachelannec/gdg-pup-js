let button = document.getElementById('colorButton');
let hex = '0123456789ABCDEF';

function changeColor() {
    // pulled this from diff repo - makes random color
    let resultColor = '#';
    const hexLength = hex.length;
    for (let i = 0; i<6; i++) {
        resultColor += hex.charAt(Math.floor(Math.random() * hexLength));
    }
    console.log(resultColor);
    document.body.style.backgroundColor = resultColor;
}

button.addEventListener('click', changeColor);