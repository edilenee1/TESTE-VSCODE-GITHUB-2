const formulario = document.querySelector("form")
const respCitação = document.querySelector("h3")

formulario.addEventListener("submit", (e)=> {
e.preventDefault()  

const nomeAutor = formulario.nomeAutor.value

const ultimoEspaco = nomeAutor.lastIndexOf(" ")

console.log(nomeAutor.substring(ultimoEspaco))
})