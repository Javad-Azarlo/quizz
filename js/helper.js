const formTtedData = (frmdata) =>{
    const question = frmdata.map(item => {
        const qustion_obj = {questions : item.question};
        const answers =  [...item.incorrect_answers];
        const correct_answer_index = Math.floor(Math.random() *4);
        answers.splice(correct_answer_index , 0 , item.correct_answer);
        qustion_obj.answer = answers;
        qustion_obj.correct_answer_index = correct_answer_index;
        return qustion_obj;
     })
     return question;
     }
    export default formTtedData;