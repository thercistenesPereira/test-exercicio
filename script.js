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

const bntSubmit = document.querySelector('#submit-btn');
const formData = document.querySelector('#form-data');

bntSubmit.addEventListener('click', ()=> {
    const studentName = document.querySelector('#input-name').value;
    const studentLastName = document.querySelector('#input-lastname').value;
    const studentEmail = document.querySelector('#input-email').value;

    console.log(studentName);
    console.log(studentLastName);
    console.log(studentEmail);
})

// const submitBtn = document.querySelector('#submit-btn');
// const formData = document.querySelector('#form-data');

// submitBtn.addEventListener('click', () => {
//   const studentName = document.querySelector('#input-name').value;
//   const studentEmail = document.querySelector('#input-email').value;
//   const studentHouse = document.querySelector('input[name="house"]:checked').value;
//   const studentFamily = document.querySelector('input[name="family"]:checked').value;
//   const studentSubjects = document.querySelectorAll('input[name="subject"]:checked');
//   const studentSubjectsArray = Array.from(studentSubjects).map(subject => subject.value);
//   const studentEvaluation = document.querySelector('input[name="evaluation"]:checked').value;
//   const studentComment = document.querySelector('#textarea').value;

//   const nameField = document.createElement('p');
//   nameField.textContent = `Nome: ${studentName}`;

//   const emailField = document.createElement('p');
//   emailField.textContent = `Email: ${studentEmail}`;

//   const houseField = document.createElement('p');
//   houseField.textContent = `Casa: ${studentHouse}`;

//   const familyField = document.createElement('p');
//   familyField.textContent = `Família: ${studentFamily}`;

//   const subjectsField = document.createElement('p');
//   subjectsField.textContent = `Matérias: ${studentSubjectsArray.join(', ')}`;

//   const evaluationField = document.createElement('p');
//   evaluationField.textContent = `Avaliação: ${studentEvaluation}`;

//   const commentField = document.createElement('p');
//   commentField.textContent = `Observações: ${studentComment}`;

//   formData.innerHTML = '';
//   formData.appendChild(nameField);
//   formData.appendChild(emailField);
//   formData.appendChild(houseField);
//   formData.appendChild(familyField);
//   formData.appendChild(subjectsField);
//   formData.appendChild(evaluationField);
//   formData.appendChild(commentField);

//   formData.style.display = 'block';
//   document.querySelector('main').style.display = 'none';
// });
