//* Hacer validaciones de los campos

//* Traer los datos de nuestra fake api y controlar que sean correctos
const userInput = document.getElementById('user');
const passInput = document.getElementById('pass');

const checkInput = (expression, element, inputValue)=>{
  let isOk = false
  if(expression.test(inputValue)){
    isOk=true;
    if(element.classList.contains('is-invalid')){
      element.classList.remove('is-invalid');
    }
    element.classList.add('is-valid')
  }else{
    if(element.classList.contains('is-valid')){
      element.classList.remove('is-valid');
    }
    element.classList.add('is-invalid');
  }
  return isOk
}


const verification = (user, password) =>{
  let userCorrect =false;
  let passwordCorrect=false;
  let userPatron = /^[a-z0-9_-]{3,16}$/;
  let passwordPatron = /^[a-z0-9_-]{6,18}$/;
  
  //PRUEBAS DE SI ESTAN BIEN LAS COSAS
  userCorrect= checkInput(userPatron,userInput,user);
  passwordCorrect = checkInput(passwordPatron, passInput, password);

  return {userCorrect, passwordCorrect}
}

const login = async (event) =>{
  event.preventDefault();

  //! VALIDARLOS
  const {userCorrect, passwordCorrect} = verification(userInput.value,passInput.value);
  //! COMPARAMOS QUE LOS DATOS COINCIDAN CON LOS GUARDADOS
  if(userCorrect===true && passwordCorrect===true){
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    let user = data.find(item=>item.user === userInput.value);
    if(user?.password === passInput.value){
      localStorage.setItem('id',JSON.stringify(user.id));
      window.location.assign(window.location.origin + '/main.html');
    }else{
      document.getElementById('msg').style.display='block'
      setTimeout(()=>{
        document.getElementById('msg').style.display='none'
      },3000)
    }
  }
}


const logout = async () =>{
  const user = JSON.parse(localStorage.getItem('user'));
  const notesLS = JSON.parse(localStorage.getItem('notes'));
  user.notes= notesLS;
  await fetch('http://localhost:3000/users/'+ user.id,{
    method:'PUT',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
  });
  localStorage.clear();
  window.location.assign(window.location.origin);
}