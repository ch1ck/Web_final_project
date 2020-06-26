let mapArray, ctx, currentImgMainX, currentImgMainY;
let imgMountain, imgMain, imgEnemy;

$(document).ready(
    function(){
        mapArray=[[0,1,1],[0,0,0],[3,1,2]];
        ctx=$("#myCanvas")[0].getContext("2d");

        imgMain=new Image();
        imgMountain=new Image();
        imgEnemy=new Image();
        imgMain.src="images/spriteSheet.png";
        imgMountain.src="images/material.png";
        imgEnemy.src="images/Enemy.png";
        currentImgMainX=0;
        currentImgMainY=0;
        imgMain.onload=function(){
            ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);

        }
        imgMountain.onload=function(){
            ctx.drawImage(imgMountain,32,65,33,33,200,0,200,200);
            ctx.drawImage(imgMountain,32,65,33,33,400,0,200,200);
            ctx.drawImage(imgMountain,32,65,33,33,200,400,200,200);
        }
        imgEnemy.onload=function(){
            ctx.drawImage(imgEnemy,0,40,120,150,0,400,200,200);
        }
        $("#hit_button").hide();
        $("#hit_button").click(function(){
            $("#talkBox").text("啊！！!");
        });
    }
    
);

$(document).keydown(function(event){
    let targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;
    event.preventDefault();
    switch(event.KeyCode||event.which){
        case 37:
            targetImgMainX=currentImgMainX-200;
            targetImgMainY=currentImgMainY;
            cutImagePositionX=175;
            break;
        case 38:
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY-200;
            cutImagePositionX=355;
            break;
        case 39:
            targetImgMainX=currentImgMainX+200;
            targetImgMainY=currentImgMainY;
            cutImagePositionX=540;
            break;
        case 40:
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY+200;
            cutImagePositionX=0;
            break;
        default:
            return;
    }
    let targetCoordinateX=targetImgMainX/200;
    let targetCoordinateY=targetImgMainY/200;
    if(targetImgMainX>400||targetImgMainX<0||targetImgMainY>400||targetImgMainY<0||
        mapArray[targetCoordinateY][targetCoordinateX]==1||mapArray[targetCoordinateY][targetCoordinateX]==3){
        ctx.clearRect(currentImgMainX,currentImgMainY,200,200);
        ctx.drawImage(imgMain, cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);
        if(targetImgMainX>400||targetImgMainX<0||targetImgMainY>400||targetImgMainY<0)
        {
            $("#talkBox").text("边界");
        }
        else if(mapArray[targetCoordinateY][targetCoordinateX]==1){
            $("#talkBox").text("有山");
        }
        else{
            $("#talkBox").text("哈喽");
            $("#hit_button").show();
        }
    }
    else{
        $("#hit_button").hide();
        ctx.clearRect(currentImgMainX,currentImgMainY,200,200);
        currentImgMainX=targetImgMainX;
        currentImgMainY=targetImgMainY;
        console.log(currentImgMainX+","+currentImgMainY);
        ctx.drawImage(imgMain, cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);
        $("#talkBox").empty();
        if(mapArray[targetCoordinateY][targetCoordinateX]==2){
            $("#talkBox").text("终点");
        }
    }
});