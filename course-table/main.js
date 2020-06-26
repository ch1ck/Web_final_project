$(document).ready(function(){
    $("#inputDate").change(function(){
        let inputDate=$(this).val();
        console.log(inputDate);
        let splitDate=inputDate.split("-");
        console.log(splitDate);
        setDate(splitDate[1],splitDate[2])
        console.log(myDate);
        setTable();
    });


    
});

function setTable(){
    $("#courseTable").empty();
    $("#courseTable").append(
        "<tr><th>场次</th><th>时间</th><th>主题</th></tr>"

    );
    let oneDayMilliSeconds=24*60*60*1000;
    let topicCounter=topicsArray.length;
    for(let x=0;x<topicCounter;x++)
    {
        let trSwitcher="<tr>";
        if(holidayArray[x]){
            trSwitcher="<tr style='color: red'>";
        }
        let thisDate=new Date(myDate.getTime()+7*x*oneDayMilliSeconds);
        $("#courseTable").append(trSwitcher+"<td>"+(x+1)+"</td>"+"<td>"+thisDate.toLocaleDateString()+"</td>"+"<td>"+topicsArray[x]+"</td>"+"</tr>");

    }
}