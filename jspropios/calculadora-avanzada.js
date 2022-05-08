function agregarDigito(dijito){
    let display = document.getElementById("display");
    display.value = display.value + dijito;
}

function allClear(){
    document.getElementById("display").value="";
}

function agregarOperador(operador){
    let display = document.getElementById("display");
    display.value = display.value + operador;
}

function calcularResultao(){
    display.value = eval(display.value);
}
function calcularPotencia(){
    let display = document.getElementById("display");
    let base  = eval(display.value);
    let exponente = document.getElementById("elevar_potencia").value;
    let resultadoPotencia = Math.pow(base,exponente);
    display.value = resultadoPotencia;
}
function factorial(n){
    if (n == 0) {
        return 1;
    } else {
        return factorialRecursivo(n - 1) * n;
    }
    
}
function long(){
    let display = document.getElementById("display");

    let resultadoPotencia = Math.log10(display.value);
    display.value = resultadoPotencia;
}
function longNat() {
    let display = document.getElementById("display");

    let resultadoPotencia = Math.log(display.value);
    display.value = resultadoPotencia;
}
function calcularRaiz() {
    display.value = Math.sqrt(display.value);
}