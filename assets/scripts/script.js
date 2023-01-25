// initial data
let currentQuestion = 0;
let hits = 0;
let score = 0;

// events

document.querySelector('.start').addEventListener('click', start);
document.querySelector('.progress--bar').style.width = `0%`;
document.querySelector('.share').addEventListener('click', share);
document.querySelector('.button').addEventListener('click', resetQuiz);


// functions

function start() {
  document.querySelector('.title').innerHTML = '';
  document.querySelector('.start').style.display = 'none';
  showQuestion();
}

function showQuestion() {
  if(questions[currentQuestion]){

    let q = questions[currentQuestion];

    let pct = Math.floor((currentQuestion / questions.length) *100);

    document.querySelector('.progress--bar').style.width = `${pct}%`;

    document.querySelector('.scoreArea').style.display = 'none';
    document.querySelector('.questionArea').style.display = 'block';
    document.querySelector('.question').innerHTML = q.question;

    let optionsHtml = '';
    for(let i in q.options) {
      optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`;
    }
    document.querySelector('.options').innerHTML = optionsHtml;
    document.querySelectorAll('.options .option').forEach(item => {
      item.addEventListener('click', answer);
    });
  } else {
    finishQuiz();
  }
}
function answer(e) {
  let answer = parseInt(e.target.getAttribute('data-op'));
  let q = questions[currentQuestion];
  if(q.answer === answer) {
    hits++;
  }
  console.log(hits);
  currentQuestion++;
  showQuestion();
}
function finishQuiz() {

  score = Math.floor((hits / questions.length) *100);

  if (score <= 30) {
    document.querySelector('.scoreText1').innerHTML = `Tá ruim, hein!`;
    document.querySelector('.scorePct').style.color = `red`;
  } else if (score > 30 && score <= 70) {
    document.querySelector('.scoreText1').innerHTML = `Tá na média...`;
    document.querySelector('.scorePct').style.color = `yellow`;
  } else if (score > 70) {
    document.querySelector('.scoreText1').innerHTML = `Parabéns!`;
    document.querySelector('.scorePct').style.color = `#0d630d`;
  }
  document.querySelector('.scorePct').innerHTML = `Você acertou ${score}%`;
  document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${hits}.`;
  document.querySelector('.questionArea').style.display = 'none';
  document.querySelector('.scoreArea').style.display = 'block';
  document.querySelector('.progress--bar').style.width = '100%';
}
function resetQuiz() {
  currentQuestion = 0;
  hits = 0;
  score = 0;
  showQuestion();
}
function share() {
  let conteudo = encodeURIComponent(document.title + ` Eu acertei ${score}%. Quanto será que você consegue? ` + window.location.href);
  document.querySelector('.share').href="https://api.whatsapp.com/send?text=" + conteudo;
}