// Validação de dados do botão "Entrar"
const btnLogin = document.querySelector('.trybewarts-login button');
const loginEmail = document.getElementById('header-email-input');
const loginPassword = document.getElementById('header-password-input');

btnLogin.addEventListener('click', () => {
  if (loginEmail.value === 'tryber@teste.com' && loginPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const updateCounter = () => {
  const textArea = document.querySelector('#textarea');
  const counter = document.querySelector('#counter');
  const maxLength = 500;
  const comprimentoLinha = textArea.value.length;
  const numeroCaracteres = maxLength - comprimentoLinha;
  counter.textContent = numeroCaracteres;
};

updateCounter();

const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

agreement.addEventListener('change', () => {
  submitBtn.disabled = !agreement.checked;
});



const harry = document.querySelector('#harry-animado');
let posicao = 0;
let velocidade = 2;

function moverHarry() {
  posicao += velocidade;
  harry.style.left = posicao + 'px';

  if (posicao > window.innerWidth) {
    posicao = -harry.clientWidth;
  }

  requestAnimationFrame(moverHarry);
}

moverHarry();
