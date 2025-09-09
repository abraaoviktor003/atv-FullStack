let usuario = {
  nome: 'João Silva', // Exemplo de nome
  email: 'joao.silva@email.com', // Exemplo de email
  senha: '12345', // Exemplo de senha
  dataDeNascimento: '01/01/1990', // Exemplo de data de nascimento
  cpf: '123.456.789-00', // Exemplo de CPF
  cargo: 'Desenvolvedor' // Exemplo de cargo
};

// Exibe as informações do usuário
console.log(usuario);

// Agora, peça ao usuário para inserir uma nova senha
let novaSenha = prompt('Digite sua nova senha:');

// Atualize a senha no objeto 'usuario' com a nova senha
usuario.senha = novaSenha;

// Exibe o objeto com a senha atualizada
console.log(usuario);

// método para exclusão de uma propriedade
console.log(pet)
