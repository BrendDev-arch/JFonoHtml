const frm = document.querySelector("form")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")
const h4 = document.querySelector("h4")

frm.addEventListener("submit",(e) =>{
    const título = frm.inTítulo.value
    const preco = Number(frm.inPreço.value)
    const entrada = Math.round(preco/2)
    const parcela = Math.round(entrada/12)
    h2.innerText = `Promoção: ${título}`
    h3.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    h4.innerText = `+12 de R$ ${parcela.toFixed(2)}`
    e.preventDefault()


})