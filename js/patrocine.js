/* Formulário */
let enviar = document.querySelector('.enviar')
let resposta = document.querySelector('.resposta')
let fechar = document.querySelector('.fechar')
let iconeFechar = document.querySelector('.close')

let nome = document.querySelector('#recipient-name')
let fantasia = document.querySelector('#recipient-fantasy')
let email = document.querySelector('#recipient-email')
let cnpj = document.querySelector('#recipient-cnpj')
const cep = document.querySelector('#recipient-cep')
let endereco = document.querySelector('#recipient-endereco')
let numero = document.querySelector('#recipient-numero')
let bairro = document.querySelector('#recipient-bairro')
let cidade = document.querySelector('#recipient-cidade')
let estado= document.querySelector('#recipient-estado')
let msg = document.querySelector('#message-text')



/* Validações*/
enviar.addEventListener('click', function(){    

    if(nome.value.trim() == "" || email.value.trim() == "" || msg.value.trim() == "" || fantasia.value.trim() == "" || cnpj.value.trim() == "" || cep.value.trim() == "" || endereco.value.trim() == "" || numero.value.trim() == ""  || bairro.value.trim() == "" || estado.value.trim() == ""|| cidade.value.trim() == ""
    ){

        resposta.style.display="block"
        resposta.innerHTML  = `<div class="alert alert-danger" role="alert">
        Você deve preencher todos os dados antes de enviar!
      </div>`
    } else {
        resposta.style.display="block"
        resposta.innerHTML = `
        <div class="alert alert-success" role="alert">
        Obrigada, entraremos em contato em breve!
        </div>`

        nome.value=""
        email.value=""
        msg.value=""
        fantasia.value=""
        cnpj.value=""
        cep.value=""
        endereco.value=""
        numero.value=""
        bairro.value=""
        cidade.value=""
        estado.value=""
    }  

})

fechar.addEventListener('click', function(){
    resposta.style.display="none"
    nome.value=""
    email.value=""
    msg.value=""
    fantasia.value=""
    cnpj.value=""
    cep.value=""
    endereco.value=""
    numero.value=""
    bairro.value=""
    cidade.value=""
    estado.value=""
})

iconeFechar.addEventListener('click',function(){
    resposta.style.display="none"
    nome.value=""
    email.value=""
    msg.value=""
    fantasia.value=""
    cnpj.value=""
    cep.value=""
    endereco.value=""
    numero.value=""
    bairro.value=""
    cidade.value=""
    estado.value=""
})

/*API CEP */

cep.addEventListener('keyup',apiCEP);

async function apiCEP(e){
    if(cep.value.length == 8){
      let reposta = await fetch(  
        "https://brasilapi.com.br/api/cep/v1/" + this.value
      );
      let cepEntrada = await reposta.json();
      console.log(cepEntrada)
      endereco.value = cepEntrada.street;
      bairro.value =  cepEntrada.neighborhood;
      cidade.value = cepEntrada.city;
      estado.value = cepEntrada.state
    
    }
  }


