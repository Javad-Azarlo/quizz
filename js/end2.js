const lclstrg = JSON.parse(localStorage.getItem("scoreLcl"));
const arry_obj_scor = JSON.parse(localStorage.getItem("scor_object")) || [];
const save_btn = document.getElementById("save");
const inpt = document.querySelector("input");
const p = document.querySelector("p");
 p.innerText = lclstrg;
const saveBtn = () => {
    if(!inpt || !lclstrg){
        alert("شما امتیاز پایینی را دریافت کرده اید")
    }
    else{
        const scor_obj = {
            user_name : inpt.value,
            score : lclstrg,
        }
        arry_obj_scor.push(scor_obj)
        localStorage.setItem("scor_object" , JSON.stringify(arry_obj_scor));
        arry_obj_scor.sort((a,b)=>b.score - a.score)
        arry_obj_scor.splice(10);
        window.location.assign("/index.html")
        console.log(arry_obj_scor)
    }
    
    
    
    
// 
}
save_btn.addEventListener("click" , saveBtn)