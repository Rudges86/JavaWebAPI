const formulario = document.querySelector("form");
const Inome = document.querySelector("#nome");
const Isenha = document.querySelector("#senha");
const Iemail = document.querySelector("#email");
const Itel = document.querySelector("#tel");


function cadastrar(){
    fetch("http://localhost:8080/cadastrar",{
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        method:"POST",
        body: JSON.stringify({
            nome: Inome.value,
            email: Iemail.value,
            senha: Isenha.value,
            telefone: Itel.value
        })
        
    })
    .then(function (res){console.log(res)})
    .catch(function(res){console.log(res)})

};

function limpar(){
    Inome.value = "",
    Iemail.value = "",
    Isenha.value = "",
    Itel.value = ""
}

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(Inome.value);

    cadastrar();
    limpar();
})