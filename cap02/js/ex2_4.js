//Criar referência ao form e ao h3 (resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Adicionar um "ouvinte" de evento ao botão submit
frm.addEventListener("submit", (e) => {
const preco = Number(frm.inQuilo.value)         //Obtém o conteúdo dos campos
const consumo = Number(frm.inConsumo.value)

const valor = preco * (consumo / 1000)          //calcula o valor do consumo

resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`   //Exibe as respostas

e.preventDefault()      //Evita o envio do form

}
)