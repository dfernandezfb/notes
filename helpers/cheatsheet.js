// Manera de declarar variables
//*CamelCase
let variable;
let variableNueva;

var variable1;
let variable2;
const variable3='Una sola vez, y nunca mas';
variable2='Sos un string';

//* STRINGS
'Hola'
"Hola"
//Back sticks
`Hola ${variable2}`

//* BOOLEANOS
true
false

//* ARRAYS
let arreglo = ['elemento1','elemento2',{},{nombre:'diego'}];
//FILTER & FIND
[1,2,3,4,5].filter(numero=> numero>3) --> [4,5];

[1,2,3,4,5].find(numero=> numero===3) --> 3;
//MAP & FOREACH

arreglo.forEach(elemento=>{
  console.log(elemento);
});
arreglo.forEach(elemento=>{
  //Creo algo en el dom con la información del elemento
})
let medicos = [{nombre:'Diego',consulta:150},{nombre:'Roman',consulta:200}];

medicos = medicos.map(medico=>medico.consulta=medico.consulta+50)

// El map modifica el array original, el forEach no

//* OBJETOS

let objeto = {
  nombre:'Diego',
  edad:26,
  pais:'Argentina',
  profesion:'Mentor',

  contarSuProfesion: function(){
    console.log(`Hola, mi profesion es ${this.profesion}`);
  }
}

//* FLUJO DE GRAN INFORMACIÓN: OBJETOS GUARDADOS EN ARRAYS

//* FUNCTIONS

function sumarNumeros(a,b){
  //instrucciones que se van a ejecutar
  return a+b
}

let suma = sumarNumeros(4,5) --> 9

// const restarNumeros = (a,b) => {
//   return a-b
// }
const restarNumeros = (a,b) => a-b

let resta = restarNumeros(5,4) --> 1

const multiplicarNumeros = function(a,b){
  return a*b
}

//* POO

class Computadora{
  constructor(procesador,ram,rigido){
    this.procesador = procesador;
    this.ram=ram;
    this.rigido=rigido;
  }
  mostrarSistemaOperativo(){
    console.log('Hola, tengo windows');
  }
}

let diego = new Computadora('Ryzen 7', 32, 1); //INSTANCIAR UN OBJETO A PARTIR DE UNA CLASE

/*
{
  procesador:'Ryzen 7',
  ram:32,
  rigido:1
}
*/
Array
String
Object
Boolean
Number

class Notebook extends Computadora{
  constructor(procesador,ram,rigido,tamaño){
    super(procesador,ram,rigido);
    this.tamaño;
  }
}

//* DOM y BOM

window //Podía manejar herramientas propias del navegador, su historial, su barra de direcciones, su tamaño
window.location
window.history
window.setInterval
window.setTimeout
document //Podía crear, borrar, editar, agregar estilos, clases, atributos y demas a todds los elementos HTML de mi documento

let elementoHtml=document.getElementById('id-conocido');
let elementoHtml2=document.querySelector('#id-conocido');
elementoHtml.classList.add('clase-nueva','clase-nueva-2');
elementoHtml.classList.remove('clase-nueva-2');
elementoHtml.addEventListener('click',()=>console.log('hola'));
elementoHtml.setAttribute('name','nombre-añadido-con-js');
//* CREAR ELEMENTOS HTML
let gamesContainer = document.getElementById('games-container');
let newGame = document.createElement('div');
nuevoElemento.innerHTML=`
<p>Soy un juego</p>
`
gamesContainer.appendChild(newGame)

//? ILUSIÓN DE HTML
/*
<span name="nombre-añadido-con-js" id='id-conocido class='clase-nueva' onclick="function(){console.log('hola')}""></span>
<div id='games-container' class='clasecita'>
  <div>
    <p>Soy un juego</p>
  </div>
</div>
*/
//* AGREGAMOS VARIOS ELEMENTOS A PARTIR DE UN ARRAY
let movies = [{nombre:'Spiderman'},{nombre:'Titanic'},{nombre:'El vengador fantasma'}]

movies.forEach(movie=>{
  let moviesContainer = document.getElementById('container-movies');
  let movieCard = document.createElement('div')
  movieCard.innerText=`${movie.nombre}`;
  moviesContainer.appendChild(movieCard);
})

//* WEB STORAGE
let user={nombre:'Diego',admin:true}
let userLS = JSON.stringify(user);
localStorage.setItem('user',userLS);

let userFromLS = localStorage.getItem('user');
'{"nombre":"Diego","admin":true}' //JSON

let userParaUsar = JSON.parse(userFromLS);
{nombre:'Diego',admin:true} //JAVASCRIPT

//! Guardado por primera vez
let notas= ['Hola','Hola mundo','Hola mundazo', 'Hi world'];
let notasLS = JSON.stringify(notas);
localStorage.setItem('notas',notasLS);

//! Utilizar una nota

let notasFromLS = JSON.parse(localStorage.getItem('notas'));


//! Simular agregar una nota

let notasFromLS = JSON.parse(localStorage.getItem('notas'));
// ['Hola','Hola mundo','Hola mundazo', 'Hi world']
//* Modificamos el array

notasFromLS.push('Nota nueva');
//['Hola','Hola mundo','Hola mundazo', 'Hi world','Nota nueva']
let notasLS = JSON.stringify(notas);
//"['Hola','Hola mundo','Hola mundazo', 'Hi world','Nota nueva']"
localStorage.setItem('notas',notasLS);

//! ASINCRONISMO

async - await

async function funcionAsincronica(){
  await setTimeout
  await fetch //ESPERALO QUE TERMINE
}

await fetch('http://localhost:3000/users/'); //!PEDIDO GET QUE TRAE TODOS LOS USUARIOS

await fetch('http://localhost:3000/users/'+ user.id); //! PEDIDO QUE TRAE EL USUARIO CON EL ID ESPECIFICADO

await fetch('http://localhost:3000/users/'+ user.id,{  //!PEDIDO PUT PARA EDITAR EL USUARIO CON EL ID ESPECIFICADO
    method:'PUT',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
  });

await fetch('http://localhost:3000/users/',{ //! CREA UN USUARIO NUEVO
    method:'CREATE',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
  });

await fetch('http://localhost:3000/users/'+ user.id,{  //! BORRA EL USUARIO CON EL ID ESPECIFICADO
    method:'DELETE'
  });