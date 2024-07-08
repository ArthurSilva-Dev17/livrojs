const prompt = require("prompt-sync")()

const salario = Number(prompt("Qual o seu salário R$: "))
const tempo = Number(prompt("Quanto tempo está na empresa (anos): "))

const quadrienios = Math.floor(tempo / 4)
const acrescimo = salario * quadrienios / 100
const salarioFinal = salario + acrescimo

console.log(`Quadriênios: ${quadrienios}`)
console.log(`Salário Final R$: ${(salarioFinal.toFixed(2))}`)