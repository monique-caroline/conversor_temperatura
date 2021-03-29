// Perguntar a temperatura em Celsius (ºC)
var temperature = prompt("Qual a temperatura em Celsius?");

// Converter a temperatura para Farenheit (ºF)
var convertToFarenheit = (temperature*1.8) + 32;

// Mostrar o resultado no console
console.log("A temperatura em Farenheit é: "+ convertToFarenheit);

//Mostrar resultado na página web com document.write()
document.write("A temperatura em Farenheit é: "+ convertToFarenheit + " ºF");

