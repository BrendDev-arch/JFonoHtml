

const frm = document.querySelector("form")
        //alert("JFono beta 1.0")
    //const nome = prompt("Qual é o seu nome ?")
    //console.log("Olá " + nome + " Seja bem vindo ao JFono beta 1.0")
frm.addEventListener("submit", (e)=>{
    const nome = document.getElementById("inNome")
    console.log(nome.value)
    document.write(nome.value)
    e.preventDefault()
})

