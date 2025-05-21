// Navegação suave ao clicar nos links do cabeçalho
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Validação do formulário de agendamento
  document.getElementById('form-agendamento').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Agendamento enviado com sucesso!');
  });
  
  // Validação do formulário de área do cliente
  document.getElementById('form-aluno').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Acesso à área do cliente realizado!');
  });


