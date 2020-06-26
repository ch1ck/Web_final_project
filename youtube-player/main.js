var player;
var currentPlay=0;
function onYouTubeIframeAPIReady(){}
function onPlayerReady(){}
function onPlayerStateChange(){}



function onYouTubeIframeAPIReady(){
    console.log("Iframe API ready1");
    player=new YT.Player("player",
    {
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
            "autoplay":0,
            "controls":0,
            "start":playTime[currentPlay][0],
            "end":playTime[currentPlay][1],
            "showinfo":0,
            "rel":0,
            "iv_load_policy":3
        },
        events:{
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
        }
    }    
    );
    console.log("Iframe API ready2");
}
function onPlayerReady(event){
    console.log("player ready1");
    $("#playButton").click(function(){
        $("#display_title").text(player.getVideoData().title);
        player.playVideo();
        console.log("play button");
    });
    console.log("player ready2");
}
function onPlayerStateChange(event){
    console.log("State changed");
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        if(currentPlay<playList.length-1){
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
        else{
            currentPlay=0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
    }
    if(player.getVideoLoadedFraction()>0){
        $("#display_title").text(player.getVideoData().title);
    }
}
