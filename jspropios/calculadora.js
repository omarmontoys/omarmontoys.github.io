function Suma(){
    //alert('Hola mundo del JS - Suma');
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let suma = Number(num1) + Number(num2);
    alert("La suma es: "+suma);
}
function Resta(){
    //alert('Hola mundo del JS - Resta');
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resta = num1 - num2;
    alert("La resta es: "+resta);
}
function Multiplicacion(){
    //alert('Hola mundo del JS - Multiplicacion');
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let multiplicacion = num1 * num2;
    alert("La   multiplicacion  es: "+multiplicacion);
}
function Division(){
    //alert('Hola mundo del JS - Division');
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let division = num1 / num2;
    alert("La Division  es: "+division);
}