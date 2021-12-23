//* Mostrar datos guardados en LS //DIEGO
//* Tomar los datos del formulario e ir mostrandolos en notita de ejemplo //GABRIEL
//* Guardar los datos de nueva nota en LS y mostrarlos //DIEGO
//* Agregar botón para eliminar

//* Usar json-server para utilizar usuarios
//* Usar json-server para todo



//* Mostrar datos guardados en LS //DIEGO

let notes = JSON.parse(localStorage.getItem('notes'));
if(!notes){
  notes=[];
  localStorage.setItem('notes',JSON.stringify(notes));
}

notes.forEach(noteText =>{
  const note = document.createElement('div');
  note.innerText = noteText;
  note.classList.add('note-style','m-3')
  const noteContainer = document.querySelector('.tablero');
  noteContainer.appendChild(note);
})


//* Tomar los datos del formulario e ir mostrandolos en notita de ejemplo

const noteContent = document.querySelector('#note-text');
const exampleNote = document.querySelector('#note-example');
console.log(noteContent);
console.log(exampleNote);
noteContent.addEventListener('keyup',()=>{
  if(noteContent.value===''){
    exampleNote.innerText='Escriba una nota';
  }else{
    exampleNote.innerText=noteContent.value;
  }
})
