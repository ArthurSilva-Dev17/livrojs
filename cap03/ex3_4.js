const prompt = require("prompt-sync")()

const racaoKg = Number(prompt("Peso da ração(Kg): "))
const consumo = Number(prompt("Quanto um gato consome por dia(gr) : "))

const duracao = Math.floor((racaoKg * 1000) / consumo)
const sobra = (racaoKg * 1000) % consumo

console.log(`Durará: ${duracao} dias`)
console.log(`Irá sobrar: ${sobra} gramas`)