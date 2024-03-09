// script.js
function convert() {
  var celsiusInput = document.getElementById('celsius').value;
  var fahrenheitInput = document.getElementById('fahrenheit').value;
  if (celsiusInput !=='') {
    var celsius = parseFloat(celsiusInput);
    var fahrenheit = celsius * 9 / 5 + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('result').innerText = celsius + "*C is " + fahrenheit.toF
  } else {
    alert("Please enter a temperature value.");
  }
}
