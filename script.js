const html = document.querySelector('html');
const displayTempo = document.querySelector('#timer');

const tipoImagem = document.querySelector('img.app__image');
const fraseTitle = document.querySelector('.app__title');

const initBtn = document.getElementById('start-pause');

const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 

const botoes = document.querySelectorAll('.app__card-button')

focoBtn.addEventListener('click', () => {
    alterarContexto('foco');
    focoBtn.classList.add('active')
});

curtoBtn.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    curtoBtn.classList.add('active')
});

longoBtn.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBtn.classList.add('active')
});

function alterarContexto(contexto){
    botoes.forEach( function (contexto) {
        contexto.classList.remove('active')
    })


    html.setAttribute('data-contexto', contexto);
    tipoImagem.setAttribute('src', `/imagens/${contexto}.png`);

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