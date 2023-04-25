const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nome=form.nome.value
    const email=form.email.value
    const senha=form.senha.value
    const rSenha=form.rSenha.value
    const resp=document.querySelector('#resp')
    if(nome.length<6 || nome.indexOf(' ')<0){
        resp.innerHTML='Nome Inválido'
    }else if(email.indexOf('@')<0 || email.indexOf('.')<0){
        resp.innerHTML='email Inválido'
    }else if(senha!=rSenha){
        resp.innerHTML='As senha precisam ser iguais!'
    }else{
        resp.innerHTML='Cadastrado com sucesso!'
    }
})

const campoCep=document.querySelector('#cep')
campoCep.addEventListener('blur',()=>{
    const CEP=campoCep.value
const config = {
    "url": `https://viacep.com.br/ws/${CEP}/json/`,
    "method": "GET",
    "timeout": 0,
  };
  $.ajax(config).done(function (response) {
    console.log({response});

    document.querySelector('#Endereco').value=response.logradouro
    document.querySelector('#bairro').value=response.bairro
    document.querySelector('#cidade').value=response.localidade
    document.querySelector('#estado').value=response.uf
  });
})
