


notas.forEach(nota=>{
  let tablero = document.querySelector('.tablero');
  let notita = document.createElement('div');
  notita.innerHTML=`<p>${nota}</p>`;
  notita.classList.add('note-example', 'm-2');
  tablero.appendChild(notita);
})





