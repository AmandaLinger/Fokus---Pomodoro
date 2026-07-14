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


focoBtn.addEventListener('click', () => {
    alterarContexto('foco');
});

curtoBtn.addEventListener('click', () => {
    alterarContexto('descanso-curto');
});

longoBtn.addEventListener('click', () => {
    alterarContexto('descanso-longo');

});

function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto);
    tipoImagem.setAttribute('src', `/imagens/${contexto}.png`);
}