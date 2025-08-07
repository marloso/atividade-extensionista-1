document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Sua mensagem foi enviada com sucesso!");
  this.reset();
});
