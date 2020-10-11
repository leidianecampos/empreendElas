let containerVideos = document.querySelector('#slider');

let enviar = document.querySelector('.enviar')
let resposta = document.querySelector('.resposta')
let fechar = document.querySelector('.fechar')
let iconeFechar = document.querySelector('.close')

let nome = document.querySelector('#recipient-name')
let email = document.querySelector('#recipient-email')
let msg = document.querySelector('#message-text')


function setaDiv(){
    var settings = {
        primeiraDiv: function(){
            elemento = document.querySelector(".conteiner-slider:first-child");
            elemento.classList.add("ativo");                  
        },

        slide: function(){
            elemento = document.querySelector(".ativo");

            if(elemento.nextElementSibling){
                elemento.nextElementSibling.classList.add("ativo");                      
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");
                settings.primeiraDiv();
            }

        },

        proximo: function(){
            
            elemento = document.querySelector(".ativo");

            if(elemento.nextElementSibling){
                elemento.nextElementSibling.classList.add("ativo");                      
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");
                settings.primeiraDiv();
            }                  
        },

        anterior: function(){
            
            elemento = document.querySelector(".ativo");

            if(elemento.previousElementSibling){
                elemento.previousElementSibling.classList.add("ativo");                      
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");                     
                elemento = document.querySelector(".conteiner-slider:last-child");
                elemento.classList.add("ativo");                      
            }                  
        },    
        

    }

    //chama o slide
    settings.primeiraDiv();     
    

    //chama o slide à um determinado tempo          
    document.querySelector(".next").addEventListener("click",settings.proximo,false);
    document.querySelector(".prev").addEventListener("click",settings.anterior,false);
}

window.addEventListener("load",setaDiv,false);


enviar.addEventListener('click', function(){    

    if(nome.value.trim() == "" || email.value.trim() == "" || msg.value.trim() == ""){
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
    }  

})

fechar.addEventListener('click', function(){
    resposta.style.display="none"
    nome.value=""
    email.value=""
    msg.value=""
})

iconeFechar.addEventListener('click',function(){
    resposta.style.display="none"
    nome.value=""
    email.value=""
    msg.value=""
})