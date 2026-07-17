/* ==========================================================
   FinVerse Quiz Engine
========================================================== */

const quizData = [

{

question:"What is the primary function of money?",

options:[
"Entertainment",
"Medium of Exchange",
"Weather Forecast",
"Internet Browser"
],

answer:1,

explanation:
"Money serves as a medium of exchange, allowing goods and services to be bought and sold efficiently."

},

{

question:"Which payment system is widely used in India?",

options:[
"UPI",
"DVD",
"Bluetooth",
"USB"
],

answer:0,

explanation:
"UPI (Unified Payments Interface) enables fast and secure digital payments."

},

{

question:"What is budgeting?",

options:[
"A movie schedule",
"A spending and savings plan",
"A mobile app",
"A tax document"
],

answer:1,

explanation:
"A budget helps you manage income, expenses and savings."

}

];



let currentQuestion = 0;

let score = 0;



const questionTitle =
document.getElementById("question");

const optionContainer =
document.getElementById("options");

const progressLabel =
document.getElementById("questionCount");

const explanation =
document.getElementById("explanation");



function loadQuestion(){

if(!questionTitle) return;

const q = quizData[currentQuestion];

questionTitle.textContent = q.question;

progressLabel.textContent =
`Question ${currentQuestion+1} of ${quizData.length}`;

optionContainer.innerHTML="";

q.options.forEach((option,index)=>{

const btn =
document.createElement("button");

btn.className="btn btn-glass";

btn.textContent=option;

btn.onclick=()=>checkAnswer(index);

optionContainer.appendChild(btn);

});

if(explanation){

explanation.textContent="";

}

}