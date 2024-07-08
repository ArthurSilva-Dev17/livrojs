 //Criar referência ao form e ao h3 (resposta)
 const frm = document.querySelector("form")
 const resp1 = document.querySelector("#outResp1")
 const resp2 = document.querySelector("#outResp2")

//Adiciona um "ouvinte" de evento ao botão submit
 frm.addEventListener("submit", (e) => {
  
    const medicamento = frm.inMedicamento.value     //Obtém o conteúdo dos campos
    const preco = Number(frm.inPreco.value)

    const desconto = Math.floor(preco * 2)          //Calcula o valor da promoção

    resp1.innerText = `Promoção de ${medicamento}`                      //Exibe as respostas
    resp2.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`

    e.preventDefault()      //Evita o envio do form
 })