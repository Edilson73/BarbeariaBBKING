function validar_dados() {

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var profissional = document.getElementById('profissional').value;
    var comentarios = document.getElementById('comentarios').value;

    // Zerar mensagens de erro
    document.getElementById('erroNome').textContent = "";
    document.getElementById('erroEmail').textContent = "";
    document.getElementById('erroCelular').textContent = "";
    document.getElementById('erroProfissional').textContent = ""; // Corrigido aqui
    document.getElementById('erroComentarios').textContent = "";

    var valido = true;

    if (nome == "") {
        document.getElementById('erroNome').textContent = "O campo nome é obrigatório!";
        valido = false;
    }
    if (email == "") {
        document.getElementById('erroEmail').textContent = "O campo e-mail é obrigatório!";
        valido = false;
    }
    if (celular == "") {
        document.getElementById('erroCelular').textContent = "O campo celular é obrigatório!";
        valido = false;
    }
    if (profissional == "") {
        document.getElementById('erroProfissional').textContent = "O campo profissional é obrigatório!";
        valido = false;
    }
    if (comentarios == "") {
        document.getElementById('erroComentarios').textContent = "O campo comentários é obrigatório!";
        valido = false;
    }

    if (valido) {
        window.alert('Dados cadastrados com sucesso');
    }

    return valido;
}
