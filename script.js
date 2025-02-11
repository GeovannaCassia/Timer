function seconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.Iniciar');
const pausar = document.querySelector('.Pausar');
const zerar = document.querySelector('.Zerar');
const tela = document.querySelector('.tela');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.style.color = 'rgb(0, 0, 0)';
        relogio.innerHTML = seconds(segundos);
    }, 1000);
}
function pausaRelogio() {
    clearInterval(timer);
    relogio.style.color = 'rgb(252, 92, 191)';
}

function zeraRelogio() {
    location.reload();
}

iniciar.addEventListener('click', function (event) {
    iniciaRelogio();
});

pausar.addEventListener('click', function (event) {
    pausaRelogio();
});

zerar.addEventListener('click', function (event) {
    zeraRelogio();
});



