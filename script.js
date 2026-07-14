const html = document.querySelector('html');
const displayTempo = document.querySelector('#timer');

const tipoImagem = document.querySelector('img.app__image');
const fraseTitle = document.querySelector('.app__title');

const initBtn = document.getElementById('start-pause');

const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');

let duracaoFoco = 1500; 
let duracaoDescansoCurto = 300; 
let duracaoDescansoLongo = 900; 

let tempoDecorrido = 1500;
let intervaloId = null;

const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');

const musica = new Audio('sons/luna-rise-part-one.mp3');
musica.loop = true;

const somInit = new Audio('sons/play.wav');
const somPause = new Audio('sons/pause.mp3');
const somFinalTemporizador = new Audio('sons/beep.mp3');

const iniciarOuPausarBtn = document.querySelector('#start-pause span');
const iniciarOuPausarImg = document.querySelector('#start-pause img');

const timerNaTela = document.querySelector('#timer')

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused){
        musica.play()
    } else{
        musica.pause()
        somPause.play()
    }
});

focoBtn.addEventListener('click', () => {
    tempoDecorrido = 1500
    alterarContexto('foco');
    focoBtn.classList.add('active')
});

curtoBtn.addEventListener('click', () => {
    tempoDecorrido = 300
    alterarContexto('descanso-curto');
    curtoBtn.classList.add('active')
});

longoBtn.addEventListener('click', () => {
    tempoDecorrido = 900
    alterarContexto('descanso-longo');
    longoBtn.classList.add('active')
});

function alterarContexto(contexto){
    mostrarTempo()

    botoes.forEach( function (contexto) {
        contexto.classList.remove('active')
    })


    html.setAttribute('data-contexto', contexto);
    tipoImagem.setAttribute('src', `imagens/${contexto}.png`);

    switch (contexto){
        case "foco":
            fraseTitle.innerHTML= `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
        break;

        case "descanso-curto":
        fraseTitle.innerHTML=`
        Que tal dar uma respirada? <strong class="app__title-strong"> Faça uma pausa curta!</strong>
        `
        break;

        case 'descanso-longo':
            fraseTitle.innerHTML=`
            Hora de voltar à superfície. <strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
        break;

        default:
            break;

    }
}


const contagemRegressiva = () => {
    if(tempoDecorrido <= 0){
        somFinalTemporizador.play()
        alert('Tempo finalizado')
        zerar()
        return;
    }
    tempoDecorrido -= 1
    mostrarTempo()
}

initBtn.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar(){
    if(intervaloId){
        somPause.play()
        zerar()
        return;
    }
    somInit.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBtn.textContent = "Pausar"
    iniciarOuPausarImg.setAttribute('src', `imagens/pause.png`)
}

function zerar(){
    clearInterval(intervaloId)
    iniciarOuPausarBtn.textContent = "Iniciar"
    iniciarOuPausarImg.setAttribute('src', `imagens/play_arrow.png`)
    intervaloId = null
}

function mostrarTempo(){
    const tempo = new Date(tempoDecorrido * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    timerNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()