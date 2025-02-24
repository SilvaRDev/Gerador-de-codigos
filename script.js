/* ELEMENTOS HTML */
let botao = document.querySelector('#btn-gerar')
let hCod = document.querySelector('#codigo')
let botaoCopiar = document.querySelector('#btn-copiar')

/* EXECUTANDO A FUNÇÃO */
botao.addEventListener('click', resetar)
botaoCopiar.addEventListener('click', copiar)

/* DEFININDO VARIÁVEIS */

let codigo = ''
let verCaractere = ''

/* DISPARA A FUNÇÃO DE GERAR E RESETA O CÓDIGO */

function resetar() {
  codigo = ''
  hCod.innerHTML = ''
  gerarCodigo()
}

/* FUNÇÃO DE GERAR O CÓDIGO */
function gerarCodigo() {
  for(let i = 0; i <= 18; i++) {
    if (i == 4 || i == 9 || i == 14) {
      codigo = codigo + '-' //Quando passar de 4 caracteres aleatórios, adicionar o traço.
    } else {
      let numeroAleatorio = Math.floor(Math.random() * 9)
      alterarCaractere()
      if (verCaractere == 0) {
        let letraAleatoria = String.fromCharCode(65 + Math.floor(Math.random() * 26))
        codigo = codigo + letraAleatoria
        alterarCaractere()
      } else {
        codigo = codigo + numeroAleatorio
        alterarCaractere()
      }
    }
  }
  hCod.innerHTML = `${codigo}`
}

function copiar() {
  copiarTexto(codigo)  
}

function copiarTexto(texto) {
  navigator.clipboard.writeText(texto)
      .then(() => window.alert("Texto copiado!"))
      .catch(err => window.alert("Erro ao copiar: ", err));
}


/* Altera a letra aleatória de sua respectiva variável. */
function alterarCaractere() {
  verCaractere = ''
  verCaractere = Math.floor(Math.random() * 2)
}