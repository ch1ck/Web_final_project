$(document).ready(function(){
    let currentQuiz=null;
    $("#startButton").click(function(){
        if(currentQuiz==null){
            currentQuiz=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(let x=0;x<questions[0].answers.length;x++){
                $("#options").append(
                    "<input name='options' type='radio' value="
                    +x
                    +"<label>"+questions[0].answers[x][0]+"</label><br><br>"
                );
                
            }
            $("#startButton").attr("value","Next");
        }
        
        else{
            $.each(
                $(":radio"),function(i,val){
                    if(val.checked){
                        if(isNaN(questions[currentQuiz].answers[i][1])){
                            $("#question").text(finalAnswers[questions[currentQuiz].answers[i][1]][0]);
                            $("#options").empty();
                            $("#options").append(finalAnswers[questions[currentQuiz].answers[i][1]][1]);
                            $("#startButton").attr("value","Restart");
                            currentQuiz=null;
                        
                        }
                        else{
                            let nextQuiz=questions[currentQuiz].answers[i][1]-1;
                            $("#question").text(questions[nextQuiz].question);
                            $("#options").empty();
                            for(let x=0;x<questions[nextQuiz].answers.length;x++){
                                $("#options").append("<input name='options' type='radio' value="+x+"<label>"+questions[nextQuiz].answers[x][0]+"</label><br><br>");
                            }
                            currentQuiz=nextQuiz;
                        }
                    }
                }
            )
        }
    });
});