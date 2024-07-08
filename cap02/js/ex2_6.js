//Criar referência ao form e ao h3
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//criar "ouvinte" de eventos, para o botão submit
frm.addEventListener("submit", (e) => {

    const preco = Number(frm.inValor.value)         //Obtém o conteúdo dos campos
    const tempo = Number(frm.inTempo.value)

    const valorTempo = Math.ceil(tempo/15)    //Calcula o tempo em valor inteiro
    const valorTotal = Math.ceil(preco * valorTempo)    //Calcula o valor

    resp.innerText = `Valor a pagar R$: ${valorTotal.toFixed(2)}`   //Exibe a resposta

    e.preventDefault()      //Evita o envio do form

})