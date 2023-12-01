function obterMensagens() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const text = document.getElementById("text").value;

    if (!name || !email || !text || !validateEmail(email)) {
        document.getElementById("entrar_email").disabled = true;
    } else {
        document.getElementById("entrar_email").disabled = false;
    }

    var retorno = [];

    var consulta = $.ajax({
        url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function () {
        return retorno;
    });

    consulta.done(function (data) {
        retorno = data;
    });

    return retorno;
}

function validateEmail(email) {
    return /\S+@\S+\.\S/.test(email);
}


function inserirMensagem(obj) {
    var inserir = $.ajax({
        url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(obj),
        dataType: 'json',
        async: false,
        contentType: 'application/json',
    });
}

var mensagens = [
    { nome: "João da Silva", email: "joao@da.silva", mensagem: "Gostaria de um orçamento sobre tal produto" },
    { nome: "João da Silva", email: "joao@da.silva", mensagem: "Gostaria de um orçamento sobre tal produto" },
    { nome: "João da Silva", email: "joao@da.silva", mensagem: "Gostaria de um orçamento sobre tal produto" },
    { nome: "João da Silva", email: "joao@da.silva", mensagem: "Gostaria de um orçamento sobre tal produto" },
    { nome: "João da Silva", email: "joao@da.silva", mensagem: "Gostaria de um orçamento sobre tal produto" },
];

document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < mensagens.length; i++) {
        var mensagem = mensagens[i];
        var newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${mensagem.nome}</td><td>${mensagem.email}</td><td>${mensagem.mensagem}</td>`;
        document.getElementById("tabelaMensagens").appendChild(newRow);
        inserirMensagem(mensagem);
    }
});
function validarUsuario(objLoginSenha) {

    const senha = document.getElementById("senha").value;
    const email = document.getElementById("email").value;
  
    if (!senha || !email || !validateEmail(email)){
        document.getElementById("entrar").disabled = true;
    } else {
        document.getElementById("entrar").disabled = false;
    }
  
  
      function validateEmail(email){
          return /\S+@\S+\.\S/.test(email);
      }

    var retorno = false;
    console.log(objLoginSenha);
    var validacao = $.ajax({
        url: 'https://app-uniesp-p2-43622fe4ead4.herokuapp.com/usuarios/validar',
        method: 'POST',
        dataType: 'json',
        async: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
                },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).fail(function(){
        return retorno;
    });

    validacao.done(function(data) {
        retorno = data;
    });
    return retorno;
}