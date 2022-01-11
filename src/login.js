// --------------------- Se crea función para permitir entrada al usuario ------------------------------------ //

const entrada = document.getElementById('btn-entrar')
entrada.addEventListener('click', () => {
  let user = document.getElementById('usuario').value
  let password = document.getElementById('password').value
  if(user == "Fercito" && password == 18){
    window.location.href = "./index.html"
  }else{
    alert('Uasuario y/o contraseña incorrectos!')
  }
})