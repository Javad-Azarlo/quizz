import function_data from './helper2.js';
const type_diffi = localStorage.getItem("typeDiff") || "easy";
const URL = `https://opentdb.com/api.php?amount=10&difficulty=${type_diffi}&type=multiple`;
console.log(URL)
const loader = document.getElementById("loader");
const container = document.getElementById("container");
const qustion_text = document.getElementById("qustion-text");
const answer_text = document.querySelectorAll(".answer-text");
const next_button = document.getElementById("next-button");
const finish_button = document.getElementById("finish-button");
const score_ = document.getElementById("score");
const p_cath = document.getElementById("p-cath")

const question_number = document.getElementById("question-number");
let scors_correct = 10;
let score = 0;
let frm_data = null;
let index_=0;
let rnd_answer_correct = null;
let is_active = true;
const formQuestion = async ()=>{
    try{
        const url_feth = await fetch(URL);
const data = await url_feth.json();
frm_data = function_data(data.results);
console.log(frm_data);
start()
    }
    catch(error){
        loader.style.display = "none";
        container.style.display = "none";
        p_cath.style.display = "block"
    }
}
const dom_frm = ()=>{
    question_number.innerText = index_ + 1;
    const {question , rnd , answer , answers} = frm_data[index_];
    rnd_answer_correct = rnd;
    qustion_text.innerText = question;
    answer_text.forEach((item , index) =>{
        item.innerText = answers[index];
    })
    console.log(rnd_answer_correct);
    console.log(answer);
 }
const start=()=>{
    loader.style.display = "none";
    container.style.display = "block";
    dom_frm();
}
const btnAnswer = (event, i) => {
    if(!is_active) return;
let index_correct = i === rnd_answer_correct ? true :false;
if(index_correct){
    event.target.classList.add("correct");
    score += scors_correct;
    score_.innerText = score;
}
else{
    event.target.classList.add("incorrect");
    setTimeout(() => {
        answer_text[rnd_answer_correct].classList.add("correct")
    }, 500);
}
is_active = false;
//lclstrg.push(score)
 }
answer_text.forEach((btn_answer , i) => {
    btn_answer.addEventListener("click" ,(event)=>btnAnswer(event , i))
})
const nextButton = () =>{
    index_++;
    if(index_ < frm_data.length){
        is_active=true;
        removeClass();
        dom_frm();
    }
    else{
        finishButton();
    }
}
const finishButton = ()=>{
    window.location.assign("end.html");
    localStorage.setItem("scoreLcl" , JSON.stringify(score));
}
const removeClass = ()=>{
    answer_text.forEach(item => {
        item.className = "answer-text"
    })
}
window.addEventListener("load" , formQuestion);
finish_button.addEventListener("click" , finishButton)
next_button.addEventListener("click" , nextButton)