$(document).ready(function(){
    
    $("#select_botton").click(function(){
        var numberOfListItem=$("#choices li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);

        $("#text_display_food").text($("#choices li").eq(randomChildNumber).text());
        $("#image_display").attr("src", pictures[randomChildNumber])
    });
});