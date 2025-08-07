// Envio do formulário de contato
document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Sua mensagem foi enviada com sucesso!");
  this.reset();
});

// Chat fictício
document.getElementById("chat-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (message !== "") {
    adicionarMensagem("user", message);
    setTimeout(() => {
      adicionarMensagem("bot", "Em breve alguém da equipe irá te responder 😊");
    }, 1000);
  }
  input.value = "";
});

function adicionarMensagem(tipo, texto) {
  const chatBody = document.getElementById("chat-body");
  const msg = document.createElement("div");
  msg.className = "chat-message " + tipo;
  msg.textContent = texto;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}
