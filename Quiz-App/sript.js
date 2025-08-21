const quizData = [
  {
    question: " 01 Which company developed JavaScript?",
    a: "Netscape",
    b: "Microsoft",
    c: "Google",
    d: "Oracle",
    correct: "a"
  },
  {
    question: " 02 Which symbol is used for comments in JavaScript?",
    a: "// for single-line, /* */ for multi-line",
    b: "<!-- -->",
    c: "#",
    d: "--",
    correct: "a"
  },
  {
    question: " 03 Which method is used to select an element by ID in JavaScript?",
    a: "getElementByClassName()",
    b: "querySelectorAll()",
    c: "getElementById()",
    d: "getElementsByTag()",
    correct: "c"
  },
  {
    question: " 04 What is the output of typeof null in JavaScript?",
    a: "null",
    b: "undefined",
    c: "object",
    d: "number",
    correct: "c"
  },
  {
    question: " 05 Which keyword is used to declare a constant in JavaScript?",
    a: "let",
    b: "var",
    c: "const",
    d: "define",
    correct: "c"
  }
]

let questionEle = document.getElementById('question');
let optionA = document.getElementById('option-a');
let optionB = document.getElementById('option-b');
let optionC = document.getElementById('option-c');
let optionD = document.getElementById('option-d');
let answer = document.querySelectorAll('.answer');
let result = document.querySelector('.result')

let currentQuiz = 0;
let score = 0;

function loadQuiz(){
  deSelectAnwer()
  questionEle.innerText = quizData[currentQuiz].question;
  optionA.innerText = quizData[currentQuiz].a;
  optionB.innerText = quizData[currentQuiz].b;
  optionC.innerText = quizData[currentQuiz].c;
  optionD.innerText = quizData[currentQuiz].d;
}

loadQuiz();

function deSelectAnwer(){
  answer.forEach(ans => ans.checked = false)
}


function getSelected(){
  let ans;
  answer.forEach(item=>{
    if (item.checked){
      ans = item.id
    } 
  })
  return ans;
}


function submitQuiz(){
  if(getSelected() == quizData[currentQuiz].correct){
    score++
  }
  currentQuiz++

  if(currentQuiz < quizData.length){
    loadQuiz()
  }

  else {
    document.querySelector(".quiz").innerHTML = `
    <h2>You answered correctly ${score}/${quizData.length} questions 🎉</h2>
    <button class="restart-btn" onclick="location.reload()">Restart Quiz</button>  `;
  }
}


function reversed(text){
  let reve = "";
  for(let i = text.length-1; i>=0; i--){
    reve += text[i]
  }
  return reve
}

console.log(reversed('Prince'))

























// let currentQuiz = 0;
// let score = 0;

// const questionEle = document.querySelector('#question');
// const optionA = document.getElementById('option-a');
// const optionB = document.getElementById('option-b')
// const optionC = document.getElementById('option-c');
// const optionD = document.getElementById('option-d')
// const answers = document.querySelectorAll('.answer');
// const result = document.querySelector('.result');

// function loadQuiz() {
//   deSelectAnwer()
//   const currentQuizData = quizData[currentQuiz].question;
//   // console.log(currentQuizData)
//   // console.log(quizData[0].a)
//   questionEle.innerText = currentQuizData;
//   optionA.innerText = quizData[currentQuiz].a
//   optionB.innerText = quizData[currentQuiz].b
//   optionC.innerText = quizData[currentQuiz].c
//   optionD.innerText = quizData[currentQuiz].d
// }

// loadQuiz()


// function deSelectAnwer() {
//   answers.forEach(ans => ans.checked = false) 
// }

// function getSelected() {
//   let ans;
//   answers.forEach(item => {
//     if (item.checked) {
//       ans = item.id
//     }
//   })
//   return ans

// }

// function submitQuiz() {
//   if(getSelected()== undefined){
//     result.innerText =  "⚠️ Please select an option!";
//     return
//   }
//   if (getSelected() == quizData[currentQuiz].correct) {
//     score++;
//   }
 
//   currentQuiz++;

//   if (currentQuiz < quizData.length) {
//     loadQuiz()
//   }

//   else {
//     document.querySelector(".quiz").innerHTML = `
//         <h2>You answered correctly ${score}/${quizData.length} questions 🎉</h2>
//         <button class="restart-btn" onclick="location.reload()">Restart Quiz</button>  `;
//   }

// }

























// function deSelectAnwer(){
//    answers.forEach(ans => ans.checked = false);
// }

// function getSelected(){
//   let answer ;
//   answers.forEach(ans=>{
//     if(ans.checked){
//       answer = ans.id
//     }
//   })
//     return answer;
// }

// function submitQuiz(){
//   const answer = getSelected();
//   if(answer){
//     if(answer===quizData[currentQuiz].correct){
//       score++;
//     }
//     currentQuiz++
//     if(currentQuiz < quizData.length){
//       loadQuiz();
//     }
//     else{
//       document.querySelector(".quiz").innerHTML = `
//         <h2>You answered correctly ${score}/${quizData.length} questions 🎉</h2>
//         <button onclick="location.reload()">Restart Quiz</button>
//       `;
//     }
//   }else{
//     result.innerText =  "⚠️ Please select an option!";
//   }
// }

