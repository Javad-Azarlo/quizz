const hight_scores = JSON.parse(localStorage.getItem("hightScore")) || [];
console.log(hight_scores)
const list = document.querySelector("ol")
const content = hight_scores.map((a , b) => {
    return `
    <li><span>${b + 1}</span>
    <span>${a.user_name}</span>
    <span>${a.score}</span></li>
    `
})
list.innerHTML = content.join("");
