function estilizarInputCorreto(input, helper){
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper){
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
}

// VAlidação username
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");



//Validar valor do input
usernameInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if(valor == ""){
        //adicionar estilos dinamicos se o valor possuir menos de tres   caracteres
        usernameHelper.innerText = "O campo Nome não deve ficar em branco ou vazio";
        estilizarInputIncorreto(usernameInput, usernameHelper)
        inputCorretos.username = false
    } else{
        //adcionar estilos dinamicos se os valores estiverem corretos
        estilizarInputCorreto(usernameInput, usernameHelper);
        inputCorretos.username = true
    }
})

//--------------Validação de e-mail-------------------//
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");


//validar vaçlor do imput
emailInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if(valor.includes("@") && valor.includes(".com")){
         //adcionar estilos dinamicos se os valores estiverem corretos
        estilizarInputCorreto(emailInput, emailHelper)
        inputCorretos.email = true
    } else{
          //adicionar estilos dinamicos se o valor não possuir @ e .com
        emailHelper.innerText = "Precisa incluir um e-mail válido!"
        estilizarInputIncorreto(emailInput, emailHelper)
        inputCorretos.email = false
    }
})

//--------------Validação de senha-------------------//
let assuntoInput = document.getElementById("assunto");
let assuntoLabel = document.querySelector('label[for="assunto"]');
let assuntoHelper = document.getElementById("assunto-helper");


assuntoInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if(valor == ""){
        //adicionar estilos dinamicos se o valor possuir menos de tres   caracteres
        assuntoHelper.innerText = "O campo Assunto não deve ficar em branco ou vazio";
        estilizarInputIncorreto(assuntoInput, assuntoHelper)
        inputCorretos.assunto = false
    } else{
        //adcionar estilos dinamicos se os valores estiverem corretos
        estilizarInputCorreto(assuntoInput, assuntoHelper);
        inputCorretos.assunto = true
    }
})
//--------------Validação de confirma senha-------------------//
let mensagemInput = document.getElementById("mensagem");
let mensagemLabel = document.querySelector('label[for="mensagem"]');
let mensagemHelper = document.getElementById("mensagem-helper");



//Validar valor do input
mensagemInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if(valor == ""){
        //adicionar estilos dinamicos se o valor possuir menos de tres   caracteres
        mensagemHelper.innerText = "O campo da mensagem não deve ficar em branco ou vazio e deve conter no máximo 300 caracteres.";
        estilizarInputIncorreto(mensagemInput, mensagemHelper)
        inputCorretos.mensagem = false
    } else{
        //adcionar estilos dinamicos se os valores estiverem corretos
        estilizarInputCorreto(mensagemInput, mensagemHelper);
        inputCorretos.mensagem = true
    }
})

//------------------------Evitar envio do fomulário-----------------//
let btnSubmit = document.querySelector('button[type="submit"]')
let inputCorretos = {
    username: false,
    email: false,
    assunto: false,
    mensagem: false
}

btnSubmit.addEventListener("click", (e) => {
    if(inputCorretos.username == false || inputCorretos.email == false || inputCorretos.assunto == false || inputCorretos.mensagem == false){
        e.preventDefault()
        alert("Preencha todos os campos obrigatório!")

    }else{
        alert("Formulário enviado com sucesso")
    }
})
