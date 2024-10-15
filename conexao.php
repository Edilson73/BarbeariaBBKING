<?php
// Configurações do banco de dados
$servername = "localhost";
$username = "root"; // geralmente é 'root' no XAMPP
$password = ""; // senha padrão vazia
$dbname = "barbearia"; // substitua pelo nome do seu banco de dados

// Criação da conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

// Preparar a consulta
$stmt = $conn->prepare("INSERT INTO agendamentos (nome, email, celular, profissional, comentarios) VALUES (?, ?, ?, ?, ?)");

if ($stmt === false) {
    die("Erro na preparação da consulta: " . $conn->error);
}

// Bind dos parâmetros
$stmt->bind_param("sssss", $_POST['nome'], $_POST['email'], $_POST['celular'], $_POST['profissional'], $_POST['comentarios']);

// Executar a consulta
if ($stmt->execute()) {
    echo "Agendamento realizado com sucesso!";
} else {
    echo "Erro ao realizar o agendamento: " . $stmt->error;
}

// Fechar a conexão
$stmt->close();
$conn->close();
?>
