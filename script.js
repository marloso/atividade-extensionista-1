document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContato");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Captura os dados preenchidos (opcional)
    const nome = form.querySelector('input[type="text"]').value;
    
    // Mensagem de feedback
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

    // Limpa os campos do formulário
    form.reset();
  });
});
