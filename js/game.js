import formTtedData from "./helper.js";
const lvl = localStorage.getItem("level");
const URL = `https://opentdb.com/api.php?amount=10&difficulty=${lvl}&type=multiple`;
const loader = document.getElementById("loader");
const container = document.getElementById("container");
const qustion_text = document.querySelector("#qustion-text");
const answer_text = document.querySelectorAll(".answer-text");
const score_text = document.getElementById("score");
const next_button = document.getElementById("next-button");
const finish_button = document.getElementById("finish-button");

 const question_number = document.getElementById("question-number")
 let is_accepted = true;
let scror_best = 10;
let scros = 0;
let formt_data = null;
let questionIdex = 1;
let correct_answer = null;
const fetchDate = async () => {
    const apiUrl = await fetch(URL);
    const data = await apiUrl.json();
    formt_data = formTtedData(data.results);
    console.log(formt_data);
     start();
}
const showQuestion = ()=>{
    question_number.innerText= questionIdex; 
    const { questions , answer , correct_answer_index } = formt_data[questionIdex];
     correct_answer = correct_answer_index;
    // console.log(correct_answer)
     qustion_text.innerText = questions;
    answer_text.forEach((btn , index)=>{
        btn.innerText = answer[index]
    }) 
}
const start = ()=>{
    loader.style.display = "none";
    container.style.display = "block";
    showQuestion()
}
const checkAnswer = (event , index)=>{
    if(!is_accepted) return;
 let is_correct = index ===  correct_answer ? true : false;
 if(is_correct){
    event.target.classList.add("correct");
    scros += scror_best;
    score_text.innerText = scros;
 }
 else{
    event.target.classList.add("incorrect");
    answer_text[correct_answer].classList.add("correct")
 }
 is_accepted =false;
}
const nextButton = ()=>{
    questionIdex++;
    if(questionIdex < formt_data.length){
        is_accepted = true;
        removeClass();
        showQuestion();
        console.log(questionIdex)
    }
    else{
       finishButton();
     }
}
const removeClass = () => {
    answer_text.forEach(item => item.className = "answer-text")
}
next_button.addEventListener("click" , nextButton);
const finishButton = () => {
    window.location.assign("end.html")
    localStorage.setItem("score" , JSON.stringify(scros))
}
finish_button.addEventListener("click" , finishButton)

window.addEventListener("load" , fetchDate);
answer_text.forEach((btn , index) => {
    btn.addEventListener("click" , (event)=> checkAnswer(event , index))
})