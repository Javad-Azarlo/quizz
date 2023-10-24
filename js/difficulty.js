const btn_diffi = document.querySelectorAll("button");

const btnDiffi = (e) => {
const level = e.target.innerText.toLowerCase();
 localStorage.setItem("level" , level);
window.location.assign("/index.html")
}
btn_diffi.forEach(btn => 
    btn.addEventListener("click" , btnDiffi))