$( document ).ready(function() {
    setTime();
    var running=false;
    var myInterval;
    console.log(new Date());
    $('#start-button').click(function(){
        if(running){
            //stop
            clearInterval(myInterval);
            running=false;
            
            $('#start-button').removeClass("btn-danger");
            $('#start-button').addClass("btn-primary");
            $('#start-button').text("Start");
        }else{
            //start
            myInterval = setInterval(setTime,1000);
            running=true;
            
            $('#start-button').removeClass("btn-primary");
            $('#start-button').addClass("btn-danger");
            $('#start-button').text("Stop");

        }
    });
});
function setTime(){
    var d = new Date();
    var currentTime = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    $('#time-recorder').text(currentTime);
}