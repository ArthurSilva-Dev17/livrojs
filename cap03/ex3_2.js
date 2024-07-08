const prompt = require("prompt-sync")()         // adiciona o pacote ao programa
const veiculo = prompt("Veículo: ")             // lÊ a entrada de dados
const preco = Number(prompt("Preço R$: "))      // lÊ a entrada de dados
const entrada = preco * 0.50                    // Calcula o valor de entrada
const parcela = (preco * 0.50) / 12             // ... e as parcelas

console.log(`Promoção: ${veiculo}`)                     // Exibe as respostas
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$: ${parcela.toFixed(2)}`)