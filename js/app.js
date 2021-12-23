//* Mostrar datos guardados en LS //DIEGO
//* Tomar los datos del formulario e ir mostrandolos en notita de ejemplo //GABRIEL
//* Guardar los datos de nueva nota en LS y mostrarlos
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

