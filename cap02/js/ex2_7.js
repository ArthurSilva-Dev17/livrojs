//criar uma referência ao form e ao h3
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//criar um "ouvinte" de evento ao submit
frm.addEventListener("submit", (e) => {

    const produto = frm.inProduto.value                //Obtém o conteúdo dos campos
    const preco = Number(frm.inPreco.value)

    const promocao = preco * 0.5                       //Calcula os valores
    const valorTotal = (preco * 2) + promocao

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorTotal.toFixed(2)}`     //Exibe as respostas
    resp2.innerText = `O 3° produto custa apenas R$: ${promocao.toFixed(2)}`

    e.preventDefault()      //Evita o envio do form

})