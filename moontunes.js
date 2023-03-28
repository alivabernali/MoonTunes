function playWaves(){
    var myAudio = document.getElementById("waves");
    myAudio.volume = 0.1;

    if (myAudio.paused) {
        myAudio.play();
    }     
    else {
        myAudio.pause()
    }   
}

function playRain(){
    var myAudio = document.getElementById("rain");
    myAudio.volume = 0.1;

    if (myAudio.paused) {
        myAudio.play();
    }     
    else {
        myAudio.pause()
    }   
}