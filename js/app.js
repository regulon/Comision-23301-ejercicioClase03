document.getElementById('saludo').placeholder = 'Persona a la que te gustaría saludar';

function saludar(){
var nombre = document.getElementById('saludo').value;
document.getElementById('cont1').innerHTML= '<h1>¡Hola '+ nombre + ', un gusto saludarte!</h1>';
}