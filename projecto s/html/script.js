// Variables de JS necesarias
var num1;
var num2;
var resultado;
var arr = [1, 2, 3, 4, 5];

// Funciones esenciales del proceso a simular
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

// Métodos de búsqueda y filtrado sobre el Array
function buscar(arr, valor) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
      return true;
    }
  }
  return false;
}

function filtrar(arr, func) {
  var resultado = [];
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      resultado.push(arr[i]);
    }
  }
  return resultado;
}

// Objetos de JS
var objeto = {
  nombre: "Objeto",
  metodo: function() {
    return "Hola desde el método";
  }
};

// Capturar entrada mediante prompt()
num1 = parseInt(prompt("Ingrese el primer número:"));
num2 = parseInt(prompt("Ingrese el segundo número:"));

// Efectuar una salida
resultado = sumar(num1, num2);
console.log("El resultado de la suma es: " + resultado);

resultado = restar(num1, num2);
console.log("El resultado de la resta es: " + resultado);

resultado = multiplicar(num1, num2);
console.log("El resultado de la multiplicación es: " + resultado);

resultado = dividir(num1, num2);
console.log("El resultado de la división es: " + resultado);

resultado = buscar(arr, 3);
if (resultado) {
  alert("El valor buscado se encuentra en el Array");
}
