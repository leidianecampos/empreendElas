let containerVideos = document.querySelector('.podcast-videos');

let enviar = document.querySelector('.enviar')
let resposta = document.querySelector('.resposta')
let fechar = document.querySelector('.fechar')
let iconeFechar = document.querySelector('.close')

let nome = document.querySelector('#recipient-name')
let email = document.querySelector('#recipient-email')
let msg = document.querySelector('#message-text')

async function funcaoApiYoutube(){ 
    
    const idApi = ""
    
    let resposta = await  fetch(`https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=UCOW_mWDf8QHxGLUSHina6Ew&key=${idApi}&maxResults=4&type=video&order=date&fields=items(id(videoId)%2Csnippet(title%2Cdescription%2Cthumbnails(medium)))&prettyPrint=false`);

    let videos = await resposta.json();    
    
    console.log(videos)
    
    if(videos.error){
        containerVideos.innerHTML = `<div class="conteiner-slider trs">
        <div class="div-podcast">
          <h1>Mulheres Que Mudam o Mundo: Zica Assis</h1>
          <iframe  src="https://www.youtube.com/embed/cH8XZ6jz550" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p><strong>Zica Assis</strong> Ela saiu do nada, lá dos morros do Rio de Janeiro, para apresentar ao mundo um modelo de negócio inovador! Você tem um pequeno negócio? Ele não sai do lugar? Tá com dificuldade de ganhar dinheiro com ele? VEJA ESSE EPISÓDIO! 
           Tem muita coisa que você pode aprender com a Zica e com todas as mulheres que você vai conhecer nesse especial. Depois desse vídeo, você vai saber como colocar essas lições na prática. Compartilhe, espalhe... quem sabe você não pode ser a próxima MULHER QUE MUDA O MUNDO!</p>
        </div>
      </div>
      
      <div class="conteiner-slider trs">          
      <div class="div-podcast">            
          <h1>Mulheres Que Mudam o Mundo: Luiza Trajano</h1>
          <iframe  src="https://www.youtube.com/embed/eRKVmRIgAmw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p><strong>Luiza Trajano</strong> criou um dos negócios mais valiosos do Brasil, o Magazine Luiza. 

          O Magalu nasceu em Franca, interior de São Paulo, e hoje está espalhado pelo Brasil e vale hoje R$172 BILHÕES. E foi essa “doida”, a Luiza, que colocou o Magalu nos trilhos do crescimento! 
          
          Ela foi “doida” porque fez tudo o que disseram pra ela que não daria certo. Porque errou muito, mas pegou tudo o que aprendeu com esses erros e devolveu para o negócio em forma de inovação e consistência! E porque ela é uma das Mulheres que Mudam o Mundo!   </p>          
        </div>
      </div>`
        

    } else {

        let arrayDescricao = ["<strong>Yara de Oliveira Rosa</strong> é Yalorixá, vem de uma família tradicional do Candomblé Efon, sendo uma das casas mais antigas da cidade de São Paulo. Iniciada há mais de 25 anos na tradição yorubá, pertence a terceira geração de orientadores espirituais tendo mais de 20 anos de estudos deste oráculo tradicional. ",
            "Recebemos no #EP14 a <strong>Luciana Hellu</strong>, conhecida também como a Cigana Eva. Ela se reconhece como médium e sensitiva desde que nasceu e há muito tempo desenvolve trabalho de orientação e auxílio para as pessoas que a procuram. Em sua atuação, Luciana Hellu faz questão de esclarecer que seu trabalho é profundamente marcado pelo respeito e carinho ao ser humano e tem ajudado as pessoas a esclarecerem suas dúvidas e alcançarem o sucesso em várias áreas da vida.",
            "No #EP13 você vai poder escutar e conhecer um pouco mais dessa voz potente, que é a <strong>Juliana Santos</strong>, mulher negra, mãe, escritora, jongueira, integrante fundadora do CineBecos e Coletivo Sete Visões, graduada em Letras e em Pedagogia, atua como professora de português, estuda a educação antroposófica, presta serviços como assessora pedagógica, traz em seu corpo a dança e a percussão como caminho para a educação e seu devir.",
            "<strong>Greta Lopes</strong> que é a nossa voz feminina no #EP12. Ela é atriz e fundadora da Transborda: uma startup da diversidade. Estudou gênero e arte no mestrado da UNESP. Ser transexual é para ela o ato mais revolucionário que seu corpo pode exercer. Anda de bicicleta aos domingos, é tutora de um gatinho preto e gosta de ouvir histórias de pessoas por aí a fora!",
            ]
        
        for(let i=0; i < videos.items.length; i++){
            let output_html = `<div class="div-podcast">

            <h1>${videos.items[i].snippet.title}</h1>
            <iframe src="https://www.youtube.com/embed/${videos.items[i].id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>${arrayDescricao[i]} <a href="https://www.youtube.com/watch?v=${videos.items[i].id.videoId}">...ver mais</a></p>
            </div>`

            containerVideos.innerHTML += output_html
        }      
    }
}

funcaoApiYoutube()


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