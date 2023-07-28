// objeto pecas
const pecas = {
  "bracos": {
    "forca": 29,
    "poder": 35,
    "energia": -21,
    "velocidade": -5
  },

  "blindagem": {
    "forca": 41,
    "poder": 20,
    "energia": 0,
    "velocidade": -20
  },
  "nucleos": {
    "forca": 0,
    "poder": 7,
    "energia": 48,
    "velocidade": -24
  },
  "pernas": {
    "forca": 27,
    "poder": 21,
    "energia": -32,
    "velocidade": 42
  },
  "foguetes": {
    "forca": 0,
    "poder": 28,
    "energia": 0,
    "velocidade": -2
  }
}

// pega todos os elementos seletores
const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');

// forEach que pega exatamente o elemento que foi clicado 
controle.forEach((elemento) => {
  // evento de click que retorna o conteudo do elemento que foi clicado
  elemento.addEventListener('click', (evento) => {
    // passa o conteudo do elemento clicado e também quem é o elemento "pai" dele
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca, evento.target.parentNode);
  })
})

// função para manipular qual a operação que está sendo feita
function manipulaDados(operacao, controle) {
  const valorPeca = controle.querySelector('[data-contador]')

  if (operacao === '-') {
    if (parseInt(valorPeca.value) > 0) {
      valorPeca.value = parseInt(valorPeca.value) - 1;
    }
    return;
  } else {
    valorPeca.value = parseInt(valorPeca.value) + 1;
  }
}

function atualizaEstatisticas(operacao, peca, controle) {
  const valorPeca = controle.querySelector('[data-contador]')

  estatisticas.forEach((elemento) => {
    console.log(parseInt(valorPeca.value));
    if (operacao === '-') {
      if (parseInt(valorPeca.value) >= 0) {
        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
      } else {
        return;
      }
    } else {
      elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    }
  })
}