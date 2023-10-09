// main.js
/*var resultado;

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene referencias a los elementos del DOM
    var num1Input = document.getElementById("num1");
    var num2Input = document.getElementById("num2");
    var sumaButton = document.querySelector(".suma");
    // Agrega un evento de clic al botón de suma
    sumaButton.addEventListener("click", function () {
        // Obtiene los valores de los campos de entrada
        var num1 = parseFloat(num1Input.value);
        var num2 = parseFloat(num2Input.value);

        // Verifica si los valores son números válidos
        resultado = num1 + num2;
        resultado = num1Input + num2Input;
            // Muestra el resultado
    });

});

console.log(resultado);
*/

/*var elementos = document.getElementsByClassName('elemento');
console.log(elementos);*/
var elemento = {'javier':15,'michelle':25}
for (let iterator in elemento) {
    elemento[iterator] +=100
    console.log(elemento[iterator]);
}