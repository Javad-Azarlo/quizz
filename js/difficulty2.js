const btn_diff = document.querySelectorAll("button");

const btnDiff =(e)=>{
const btn_event = e.target.innerText.toLowerCase();
localStorage.setItem("typeDiff" , btn_event);
window.location.assign("/index.html")
 }
btn_diff.forEach(btn =>{
    btn.addEventListener("click" , btnDiff)
})