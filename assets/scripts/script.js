// initial data
let currentQuestion = 0;


showQuestion();

// functions
function showQuestion() {
  if(questions[currentQuestion]){
    let q = questions[currentQuestion];

    document.querySelector('.scoreArea').style.display = 'none';
    document.querySelector('.questionArea').style.display = 'block';
    document.querySelector('.question').innerHTML = q.question;
    document.querySelector('.options').innerHTML = '';

    let optionsHtml = '';
    for(let i in q.options) {
      optionsHtml += `<div>${}</div>`
    }


  } else {
    // fim
  }
}