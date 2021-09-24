var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-black', 'shadow');
  } else {
    nav.classList.remove('bg-black', 'shadow');
  }
})

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const submitInput = document.querySelector('#submitbtn');
const errorMessage = document.querySelector('#txtname')
let nameOk = false;
let emailOk = false;

submitInput.addEventListener('click', (e) => {
  e.preventDefault()

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === '' || emailValue === '')
    errorMessage.textContent = 'preencha todos os campos';
    errorMessage.style.color = 'red';
  setTimeout(() => {
    errorMessage.textContent = '';
  }, 2000);
  return;
});

function ValidationName() {
  let txtName = document.querySelector('#txtname');
  if (nameInput.value.length < 3) {
    txtName.innerHTML = 'nome inválido';
    txtName.style.color = 'red';
  } else {
    txtName.style.display = 'none';
    nameOk = true;
  }
}

function ValidationEmail() {
  let txtEmail = document.querySelector('#txtemail');
  if (emailInput.value.indexOf('@') == -1 || emailInput.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'e-mail inválido';
    txtEmail.style.color = 'red';
  } else {
    txtEmail.style.display = 'none';
    emailOk = true;
  }
}

function SendValidation() {
  if (nameOk == true && emailOk == true) {
    alert('Cadastro realizado com sucesso');
  }
}

