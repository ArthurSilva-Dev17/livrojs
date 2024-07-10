//criar referências
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//criar ouvinte de evento ao submit
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inName.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso        // declara variável peso

    if (masculino) {        //se masculino (ou, if (masculino == true))
      peso = 22 * Math.pow(altura, 2)
    }   else {
        peso = 21 * Math.pow(altura, 2)
    }

    //apresenta a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `${nome}: Seu peso ideal é: ${peso.toFixed(2)} kg`
})