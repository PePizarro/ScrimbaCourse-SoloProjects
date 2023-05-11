

/* Reajustar tamaño del input */
let inputEl = document.getElementById('input-box');
inputEl.addEventListener('input', resizeInput);
resizeInput.call(inputEl);

function resizeInput() {
    this.style.width = this.value.length + "ch";
  }

/* CONVERSIONES */


// Obtener variables de los <p>

let lengthEl = document.getElementById('length');
let volumeEl = document.getElementById('volume');   
let massEl = document.getElementById('mass');


// botón de conversión
inputBtn = document.getElementById("convert")
inputBtn.addEventListener("click", render_convertions);


function render_convertions() {
    let inputval = document.getElementById('input-box').value;

    lengthEl.innerHTML = `${inputval} meters = ${(inputval * 3.281).toFixed(3)} feet | ${inputval} feet = ${(inputval / 3.281).toFixed(3)} meters`;
    volumeEl.innerHTML = `${inputval} liters = ${(inputval * 0.264).toFixed(3)} gallons | ${inputval} gallons = ${(inputval / 0.264).toFixed(3)} liters`;
    massEl.innerHTML = `${inputval} kilos = ${(inputval * 2.204).toFixed(3)} pounds | ${inputval} pounds = ${(inputval / 2.204).toFixed(3)} kilos`;
}