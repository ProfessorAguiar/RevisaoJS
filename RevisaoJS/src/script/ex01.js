// console.log('Saída de texto com console.log()')
// const form=document.querySelector('form')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const paragrafo=document.createElement('p')
//     const body=document.querySelector('body')
//     body.append(paragrafo)
//     paragrafo.innerHTML='Olá, Seja bem vindo: '+form.nome.value
// })

const calc = document.getElementById('calc')
calc.addEventListener('click', (e) => {
    e.preventDefault()
    const n1 = Number(document.querySelector('#n1').value)
    const n2 = Number(document.getElementById('n2').value)
    const select = (document.getElementById('select').value)
    let result = 0
    const paragrafo = document.createElement('p')
    const body = document.querySelector('body')
    body.append(paragrafo)
    // if(select==='soma'){
    //     result=n1+n2
    // }else if(select==='subtração'){
    //     result=n1-n2
    // }else if(select==='multiplicação'){
    //     result=n1*n2
    // }else{
    //     result=n1/n2
    // }
    switch (select) {
        case 'soma':
            result = n1 + n2
            break
        case 'subtração':
            result = n1 - n2
            break
        case 'multiplicação':
            result = n1 * n2
            break
        case 'divisão':
            result = n1 / n2
            break
    }
    paragrafo.innerHTML = `O Resultado da ${select} é: ${result}`
})


const pessoa={
    nome:'Vinicius Aguiar',
    idade:33,
    email:'aguiar.professor@outlook.com'
}
pessoa.nome='Roberto'
document.write(`nome: ${pessoa.nome} <hr> email: ${pessoa.email}`)
const CEP='21220560'
const config = {
    "url": `https://viacep.com.br/ws/${CEP}/json/`,
    "method": "GET",
    "timeout": 0,
  };
  $.ajax(config).done(function (response) {
    console.log(response);
    document.write(`CEP: ${response.cep} <br>
    Rua/Estrada/Av.: ${response.logradouro}<br>
    bairro: ${response.bairro}<br>
    cidade: ${response.localidade}<br>
    estado: ${response.uf}<br>`)
  });