// Saudação com base na hora
const saudacao = document.getElementById("saudacao");
const hora = new Date().getHours();

if (hora < 12) {
  saudacao.innerText = "Bom dia!";
} else if (hora < 18) {
  saudacao.innerText = "Boa tarde!";
} else {
  saudacao.innerText = "Boa noite!";
}
