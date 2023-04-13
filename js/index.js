function esPar(numero) {
    if(numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

function verificarNumero() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    let comprobacion = VerificarFormato(numero);
    resultado.innerText = "";
    document.getElementById("numero").value = "";
    if(comprobacion==true){
        resultado.innerText = esPar(numero);
        document.getElementById("numero").value = "";
    }
}

function VerificarFormato(numero) {
    if(isNaN(numero)|| numero === ""){
        alert('Escriba solo numeros o escriba formato entero');
        document.getElementById('numero').focus();
        return false;
    };
return true;
}

function verificarCadena() {
    let texto = document.getElementById("texto").value;
    let resultado2 = document.getElementById("resultado2");
    if(/\d/.test(texto)|| texto === ""){
        resultado2.innerText = "";
        document.getElementById("texto").value = "";
        alert('formato incorrecto, digite solo texto');
        document.getElementById('texto').focus();
        return false;
    }else if (texto === texto.toUpperCase()) {
        resultado2.innerHTML = "El texto está formada sólo por mayúsculas.";
      } else if (texto === texto.toLowerCase()) {
        resultado2.innerHTML = "El texto está formada sólo por minúsculas.";
      } else {
        resultado2.innerHTML = "El texto es una mezcla de mayúsculas y minúsculas.";
      }
      resultado2.classList.add("mostrar");
      document.getElementById("texto").value = "";
}


function esPalindromo(texto2) {
// lo que hace es pasar el texto a minúsculas y quitarle los espacios y caracteres especiales
texto2 = texto2.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
// Comprobrueba si el texto2 es igual a su reverso
return texto2 === texto2.split("").reverse().join("");
}

function verificarPalindromo() {
    // Obtener el valor del campo de entrada
    var texto2 = document.getElementById("texto2").value;
    if(texto2 === ""){
        resultado3.innerText = "";
        document.getElementById("texto2").value = "";
        alert('Escriba algo');
        document.getElementById('texto2').focus();
        return false;
        // Verificar si es un palíndromo
    }else if (esPalindromo(texto2)) {
        document.getElementById("resultado3").innerHTML = "La cadena es un palíndromo";
        document.getElementById("texto2").value = "";
    } else {
        document.getElementById("resultado3").innerHTML = "La cadena no es un palíndromo";
        document.getElementById("texto2").value = "";
    }
}

    