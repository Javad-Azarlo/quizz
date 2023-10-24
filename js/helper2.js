 const function_data = (frm)=>{
    const new_frm = frm.map(item =>{
     const frm_question = {question : item.question};
     const correct_answer = item.correct_answer;
     const array_answer = [...item.incorrect_answers];
    
     const rnd_answer = Math.floor(Math.random() * 4);
     array_answer.splice(rnd_answer , 0 , correct_answer);
     
     frm_question.rnd = rnd_answer;
     frm_question.answer = correct_answer;
     frm_question.answers = array_answer;
      return frm_question;
   })
   return new_frm;
 }
 export default function_data;