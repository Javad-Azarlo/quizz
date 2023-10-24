const scorlevel = JSON.parse(localStorage.getItem("scor_object")) || [];
const elem_ol = document.querySelector("ol");
const level_score = scorlevel.map((item , index) => {
    return `
    <li>
        <span>${index +1 }</span>
        <span>${item.user_name}</span>
        <span>${item.score}</span>
    </li>
    `
})
elem_ol.innerHTML=level_score.join("")