


function submitWithVariable(nome, profissao) {
  // alerta o valor do campo
  alert("Bem vindo " + profissao + " " + nome);
  // impede o envio do form
};

function submit() {
  // alerta o valor do campo
  alert("Bem vindo " + document.getElementById('profissao').value + " " + document.getElementById('name').value);
  // impede o envio do form
};