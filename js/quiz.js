const QUIZ_QUESTIONS = [
  {question:'Which function displays text in Python?',options:['show()','print()','display()','write()'],answer:1,explanation:'print() sends values to standard output.'},
  {question:'Which symbol starts a single-line comment?',options:['//','#','<!--','**'],answer:1,explanation:'Python comments begin with #.'},
  {question:'Which data type stores key-value pairs?',options:['List','Tuple','Dictionary','Set'],answer:2,explanation:'A dictionary maps unique keys to values.'},
  {question:'What does len([10, 20, 30]) return?',options:['2','3','30','60'],answer:1,explanation:'The list contains three items.'},
  {question:'Which keyword defines a function?',options:['func','function','define','def'],answer:3,explanation:'Functions begin with the def keyword.'},
  {question:'Which collection automatically removes duplicates?',options:['String','List','Set','Tuple'],answer:2,explanation:'A set stores unique values.'},
  {question:'What is the result of 17 % 5?',options:['2','3.4','5','12'],answer:0,explanation:'The % operator returns the remainder, which is 2.'},
  {question:'Which loop is best for visiting every list item?',options:['if','try','for','class'],answer:2,explanation:'A for loop iterates over each value in a sequence.'},
  {question:'Which block handles an expected error?',options:['except','return','import','yield'],answer:0,explanation:'except handles an exception raised inside try.'},
  {question:'What does __init__ do in a class?',options:['Deletes an object','Initializes an object','Imports a module','Ends a loop'],answer:1,explanation:'__init__ sets the initial state of a new object.'}
];

function createQuiz() {
  let index = 0;
  let score = 0;
  let answered = false;
  const card = document.querySelector('#quiz-card');
  const result = document.querySelector('#quiz-result');
  const question = document.querySelector('#quiz-question');
  const options = document.querySelector('#quiz-options');
  const feedback = document.querySelector('#quiz-feedback');
  const next = document.querySelector('#next-question');

  function render() {
    answered = false;
    const item = QUIZ_QUESTIONS[index];
    document.querySelector('#quiz-counter').textContent = `Question ${index + 1} of ${QUIZ_QUESTIONS.length}`;
    document.querySelector('#quiz-score').textContent = `Score: ${score}`;
    document.querySelector('#quiz-progress-fill').style.width = `${(index / QUIZ_QUESTIONS.length) * 100}%`;
    question.textContent = item.question;
    feedback.textContent = '';
    feedback.className = 'quiz-feedback';
    next.classList.add('hidden');
    options.replaceChildren();
    item.options.forEach((label, choice) => {
      const button = document.createElement('button');
      button.className = 'quiz-option';
      button.textContent = `${String.fromCharCode(65 + choice)}. ${label}`;
      button.addEventListener('click', () => answer(choice));
      options.append(button);
    });
  }

  function answer(choice) {
    if (answered) return;
    answered = true;
    const item = QUIZ_QUESTIONS[index];
    const buttons = [...options.children];
    buttons.forEach(button => { button.disabled = true; });
    buttons[item.answer].classList.add('correct');
    if (choice === item.answer) {
      score += 1;
      feedback.textContent = `Correct! ${item.explanation}`;
      feedback.style.color = 'var(--green)';
    } else {
      buttons[choice].classList.add('incorrect');
      feedback.textContent = `Not quite. ${item.explanation}`;
      feedback.style.color = 'var(--red)';
    }
    document.querySelector('#quiz-score').textContent = `Score: ${score}`;
    next.textContent = index === QUIZ_QUESTIONS.length - 1 ? 'See Results →' : 'Next Question →';
    next.classList.remove('hidden');
  }

  function finish() {
    card.classList.add('hidden');
    result.classList.remove('hidden');
    const percentage = score / QUIZ_QUESTIONS.length * 100;
    document.querySelector('#final-score').textContent = `${score}/${QUIZ_QUESTIONS.length}`;
    document.querySelector('.result-ring').style.background = `conic-gradient(var(--yellow) ${percentage}%, var(--surface-2) 0)`;
    document.querySelector('#result-title').textContent = percentage >= 80 ? 'Excellent work!' : percentage >= 60 ? 'Good progress!' : 'Keep practicing!';
    document.querySelector('#result-message').textContent = percentage >= 80 ? 'You have a strong Python foundation.' : 'Review the lessons you found difficult, then try again.';
  }

  next.addEventListener('click', () => {
    if (index < QUIZ_QUESTIONS.length - 1) { index += 1; render(); } else finish();
  });
  document.querySelector('#restart-quiz').addEventListener('click', () => {
    index = 0; score = 0; result.classList.add('hidden'); card.classList.remove('hidden'); render();
  });
  render();
}
