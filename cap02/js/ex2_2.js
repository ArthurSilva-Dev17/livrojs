
// Cria referência ao form e ao h3 e h4 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//criar um "ouvinte" de evento, acionado quando o botãp submit for clicado

frm.addEventListener("submit", (e) => {

    const titulo = frm.inTitulo.value               // obtém o conteúdo do campo Título
    const duracao = Number(frm.inDuracao.value)     // obtém o conteúdo do campo Duração

    const horas = Math.floor(duracao / 60)          // arredonda para baixo o resultado
    const minutos = duracao % 60                    // obtém o resto da divisão

    resp1.innerText = titulo                                  // Exibe a resposta do Título
    resp2.innerText = `${horas}hora(s) e ${minutos}minuto(s)` // Exibe a resposta da Duração

    e.preventDefault()      // Evita envio do form 
}
)
