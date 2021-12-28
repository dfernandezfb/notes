//* Mostrar datos guardados en LS //DIEGO
//* Tomar los datos del formulario e ir mostrandolos en notita de ejemplo //GABRIEL
//* Guardar los datos de nueva nota en LS y mostrarlos //DIEGO
//* Agregar botón para eliminar //GABRIEL

//* Usar json-server para utilizar usuarios
//* Usar json-server para todo



//* Mostrar datos guardados en LS //DIEGO

let notes = JSON.parse(localStorage.getItem('notes'));
if(!notes){
  notes=[];
  localStorage.setItem('notes',JSON.stringify(notes));
}

notes.forEach(noteItem =>{
  const note = document.createElement('div');
  note.innerHTML = `
  <div class="delete-button"><button class="btn btn-danger">X</button></div>
  <div>${noteItem.text}</div>
  <div class="note-date">Creador:${noteItem.creator}<br>${new Date(noteItem.date)}</div>
  `;
  note.id=noteItem.id;
  note.classList.add('note-style','m-3')
  const noteContainer = document.querySelector('.tablero');
  noteContainer.appendChild(note);
})
//1ra vuelta 
// noteText= {id:1, text}
// note.innerText = noteText;
//   note.classList.add('note-style','m-3')
//   const noteContainer = document.querySelector('.tablero');
//   noteContainer.appendChild(note);
// //2da vuelta
// noteText='eñlemasd'
// note.innerText = noteText;
//   note.classList.add('note-style','m-3')
//   const noteContainer = document.querySelector('.tablero');
//   noteContainer.appendChild(note);
//   //3ra vuelta
//   noteText = 'asdasd'
//   note.innerText = noteText;
//   note.classList.add('note-style','m-3')
//   const noteContainer = document.querySelector('.tablero');
//   noteContainer.appendChild(note);


//* Tomar los datos del formulario e ir mostrandolos en notita de ejemplo

const noteContent = document.querySelector('#note-text');
const noteCreator = document.querySelector('#note-creator');
const exampleNote = document.querySelector('#note-example');

noteContent.addEventListener('keyup',()=>{
  if(noteContent.value===''){
    exampleNote.innerText='Escriba una nota';
  }else{
    exampleNote.innerText=noteContent.value;
  }
})


//* Guardar los datos de nueva nota en LS y mostrarlos (Create/Update) //DIEGO
/*
[]
1er elemento 
id:1
[{}]
2do elemento
id:2
[{},{}]
id:3
*/
const addNote = (event) => {
  event.preventDefault();

  // TODO Guardar en LS
  //! Traer lo que haya guardado en LS
  const notesLS = JSON.parse(localStorage.getItem('notes'));
  //! Editamos los datos que trajimos con la nueva nota
  let newNote = {
    id:notesLS.length+1,
    creator:noteCreator.value,
    text:noteContent.value,
    date:new Date()
  }
  notesLS.push(newNote);
  //! Volver a mandarlo a LS
  localStorage.setItem('notes',JSON.stringify(notesLS));

  //TODO Mostrar la nueva nota en el DOM
  const note = document.createElement('div');
  note.innerHTML =`
  <div class="delete-button"><button class="btn btn-danger">X</button></div>
  <div>${newNote.text}</div>
  <div class="note-date">Creador:${newNote.creator}<br>${newNote.date}</div>
  `;
  note.id= newNote.id;
  note.classList.add('note-style','m-3')
  const noteContainer = document.querySelector('.tablero');
  noteContainer.appendChild(note);

  //TODO Borrar infor de la nota de ejemplo y del form
  document.querySelector('form').reset();
  exampleNote.innerText = 'Escriba una nota';
}


//* Agregar botón para eliminar y eliminar//GABRIEL

//!EMPEZAR POR DIEGO

//? IMAGINACION
/*?
notes=['Hola', 'Hola Mundo', 'Hello world', 'Hi world', 'Sayonara', 'Hello world']

event.target.innerText --> 'Hello world'notes

notes.filter(note=> note=== 'Hello world');
*/
//* Empezá a hacer el login, solo el html y css por ahora (DIEGO)
