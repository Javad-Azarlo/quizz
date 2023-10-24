const score = JSON.parse(localStorage.getItem("score"));
const hight_score = JSON.parse(localStorage.getItem("hightScore")) || [];
const element =  document.querySelector("p");
const inpt = document.querySelector("input")
const save_btn = document.getElementById("save")
element.innerText = score;

const saveBtn = ()=>{
    if(!inpt.value || !score){
        alert("هیچ امتیازی ندارید")
    }
    else{
        const obj_name = {
            user_name : inpt.value,
            score,
        }
        hight_score.push(obj_name);
        hight_score.sort((a,b)=> b.score-a.score)
        hight_score.splice(10);
        localStorage.setItem("hightScore", JSON.stringify(hight_score));
        localStorage.removeItem("score");
        window.location.assign("/index.html")
        console.log(hight_score)
    }
}
save_btn.addEventListener("click" , saveBtn)