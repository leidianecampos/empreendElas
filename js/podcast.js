let containerVideos = document.querySelector('#slider');

let enviar = document.querySelector('.enviar')
let resposta = document.querySelector('.resposta')
let fechar = document.querySelector('.fechar')
let iconeFechar = document.querySelector('.close')

let nome = document.querySelector('#recipient-name')
let email = document.querySelector('#recipient-email')
let msg = document.querySelector('#message-text')


function funcaoApiYoutube(){   

    const idYoutube = ""
    
    
    fetch(`https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=UCOW_mWDf8QHxGLUSHina6Ew&key=${idYoutube}&maxResults=4&type=video&order=date&fields=items(id(videoId)%2Csnippet(title%2Cdescription%2Cthumbnails(medium)))&prettyPrint=false`)
    .then(function(resposta){
        return resposta.json()
    })    
    .then(function(videos){            
    
            let arrayDescricao = ["<strong>Yara de Oliveira Rosa</strong> é Yalorixá, vem de uma família tradicional do Candomblé Efon, sendo uma das casas mais antigas da cidade de São Paulo. Iniciada há mais de 25 anos na tradição yorubá, pertence a terceira geração de orientadores espirituais tendo mais de 20 anos de estudos deste oráculo tradicional. ",
            "Recebemos no #EP14 a <strong>Luciana Hellu</strong>, conhecida também como a Cigana Eva. Ela se reconhece como médium e sensitiva desde que nasceu e há muito tempo desenvolve trabalho de orientação e auxílio para as pessoas que a procuram. Em sua atuação, Luciana Hellu faz questão de esclarecer que seu trabalho é profundamente marcado pelo respeito e carinho ao ser humano e tem ajudado as pessoas a esclarecerem suas dúvidas e alcançarem o sucesso em várias áreas da vida.",
            "No #EP13 você vai poder escutar e conhecer um pouco mais dessa voz potente, que é a <strong>Juliana Santos</strong>, mulher negra, mãe, escritora, jongueira, integrante fundadora do CineBecos e Coletivo Sete Visões, graduada em Letras e em Pedagogia, atua como professora de português, estuda a educação antroposófica, presta serviços como assessora pedagógica, traz em seu corpo a dança e a percussão como caminho para a educação e seu devir.",
            "<strong>Preta Lopes</strong> que é a nossa voz feminina no #EP12. Ela é atriz e fundadora da Transborda: uma startup da diversidade. Estudou gênero e arte no mestrado da UNESP. Ser transexual é para ela o ato mais revolucionário que seu corpo pode exercer. Anda de bicicleta aos domingos, é tutora de um gatinho preto e gosta de ouvir histórias de pessoas por aí a fora!",
            ]
                        
            for(let i=0; i < videos.items.length; i++){
                let output_html = `
                <div href="#" class="conteiner-slider trs">          
                <div class="div-podcast">            
                <h1>${videos.items[i].snippet.title}</h1>
                <iframe src="https://www.youtube.com/embed/${videos.items[i].id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>${arrayDescricao[i]}</p>                         
                </div>
                </div>           
                `    
                containerVideos.innerHTML += output_html
            }
            setaDiv()
        
    })
    .catch(function(){
        containerVideos.innerHTML = `
        <div class="conteiner-slider trs">
          <div class="div-podcast">
            <h1>#EP15 - COMO AS FORÇAS DOS ORIXÁS PODEM CONTRIBUIR PARA O NOSSO AUTOCUIDADO!</h1>
            <iframe src="https://www.youtube.com/embed/3m0i4u_biDU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p><strong>Yara de Oliveira Rosa</strong> é Yalorixá, vem de uma família tradicional do Candomblé Efon, sendo uma das casas mais antigas da cidade de São Paulo. Iniciada há mais de 25 anos na tradição yorubá, pertence a terceira geração de orientadores espirituais tendo mais de 20 anos de estudos deste oráculo tradicional. </p>
          </div>
        </div>
        
        <div class="conteiner-slider trs">          
        <div class="div-podcast">            
            <h1>#EP14 - COMO OS CIGANOS ESPIRITUAIS AGEM NA VIDA DAS PESSOAS QUE OS PROCURAM!</h1>
            <iframe src="https://www.youtube.com/embed/7X89YiwtE4Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Recebemos no #EP14 a <strong>Luciana Hellu</strong>, conhecida também como a Cigana Eva. Ela se reconhece como médium e sensitiva desde que nasceu e há muito tempo desenvolve trabalho de orientação e auxílio para as pessoas que a procuram. Em sua atuação, Luciana Hellu faz questão de esclarecer que seu trabalho é profundamente marcado pelo respeito e carinho ao ser humano e tem ajudado as pessoas a esclarecerem suas dúvidas e alcançarem o sucesso em várias áreas da vida.  </p>          
          </div>
        </div> 
        
        <div class="conteiner-slider trs">
          <div class="div-podcast">
            <h1>#EP13 - O CORPO NOS ESPAÇOS DE APRENDIZAGEM!</h1>                
            <iframe src="https://www.youtube.com/embed/95UOFOzgf4k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
            <p>No #EP13 você vai poder escutar e conhecer um pouco mais dessa voz potente, que é a <strong>Juliana Santos</strong>, mulher negra, mãe, escritora, jongueira, integrante fundadora do CineBecos e Coletivo Sete Visões, graduada em Letras e em Pedagogia, atua como professora de português, estuda a educação antroposófica, presta serviços como assessora pedagógica, traz em seu corpo a dança e a percussão como caminho para a educação e seu devir.</p>
          </div>
        </div>

        <div class="conteiner-slider trs">
          <div class="div-podcast">
            <h1 >#EP12 - REAFIRMANDO A SUA EXISTÊNCIA!</h1>
            <iframe src="https://www.youtube.com/embed/uFvNGr0LMVw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p><strong>Preta Lopes</strong> que é a nossa voz feminina no #EP12. Ela é atriz e fundadora da Transborda: uma startup da diversidade. Estudou gênero e arte no mestrado da UNESP. Ser transexual é para ela o ato mais revolucionário que seu corpo pode exercer. Anda de bicicleta aos domingos, é tutora de um gatinho preto e gosta de ouvir histórias de pessoas por aí a fora! </p>
          </div>
        </div>
        `

        setaDiv()
        
    })      
    
}
    


funcaoApiYoutube()


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