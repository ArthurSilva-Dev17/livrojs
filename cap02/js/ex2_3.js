// Criar referência ao form e ao h3 (reposta)

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

//criar um "ouvinte" de evento, acionado quando o botãp submit for clicado

frm.addEventListener("submit", (e) => {

    const modelo = frm.inModelo.value               // obtém o conteúdo dos campos
    const valor = Number(frm.inValor.value)

    const valorEntrada = valor * 0.5                // calcula o valor da entrada
    const saldo = (valor * 0.5) / 12                // ...  e das parcelas

    resp1.innerText = `Promoção: ${modelo}`                         //exibe as respostas
    resp2.innerText = `Entrada de R$ ${valorEntrada.toFixed(2)}`
    resp3.innerText = `+12x de R$ ${saldo.toFixed(2)}`

    e.preventDefault()

})