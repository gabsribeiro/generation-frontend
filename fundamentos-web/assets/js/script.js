let nome = document.getElementById('nome');
let assunto = document.querySelector('#assunto');
let mensagem = document.querySelector('#mensagem');
let nomeOk = false;
let assuntoOk = false;
let mensagemOk = false;

function ValidationFormNome() {
    let txt = document.querySelector('#txt-nome');
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome inválido';
        txt.style.color = 'red';
    } else {
        txt.innerHTML = 'Nome válido';
        txt.style.color = 'green';
        nomeOk = true;
    }
}

function ValidationFormAssunto() {
    let txtAssunto = document.querySelector('#txt-assunto');
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Máximo de caracteres: 100';
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = 'block';
    } else {
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

function ValidationFormMensagem() {
    let txtMensagem = document.querySelector('#txt-mensagem');
    if (mensagem.value.length >= 500) {
        txtMensagem.innerHTML = 'Máximo de caracteres: 500';
        txtMensagem.style.color = 'red';
        txtMensagem.style.display = 'block';
    } else {
        txtMensagem.style.display = 'none';
        mensagemOk = true;
    }
}

function SendValidation() {
    if (nomeOk == true && assuntoOk == true && mensagemOk == true) {
        alert('Enviado com sucesso');
    } else {
        alert('Preencha os campos corretamente');
    }
}