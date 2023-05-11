

const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault()
    const color = form.elements.color.value.substring(1);
    const colorScheme = form.elements.schemes.value;
    // console.log('Form submitted')
    fetchData(color, colorScheme)
})

function fetchData(hex, scheme){
    url = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${scheme}&count=5&format=json`
    fetch(url)
    .then(res => res.json())
    .then(data => {renderColors(data.colors)})
}

function renderColors(colors){

    document.getElementById("colors").innerHTML = `
        <div class="colors" id="color1" style="background-color:${colors[0].hex.value};"></div>
        <div class="colors" id="color2" style="background-color:${colors[1].hex.value};"></div>
        <div class="colors" id="color3" style="background-color:${colors[2].hex.value};"></div>
        <div class="colors" id="color4" style="background-color:${colors[3].hex.value};"></div>
        <div class="colors" id="color5" style="background-color:${colors[4].hex.value};"></div>
        <p id="hex1">${colors[0].hex.value}</p>
        <p id="hex2">${colors[1].hex.value}</p>
        <p id="hex3">${colors[2].hex.value}</p>
        <p id="hex4">${colors[3].hex.value}</p>
        <p id="hex5">${colors[4].hex.value}</p>
    `
}