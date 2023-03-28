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

function playForest(){
    var myAudio = document.getElementById("forest");
    myAudio.volume = 0.2;

    if (myAudio.paused) {
        myAudio.play();
    }     
    else {
        myAudio.pause()
    }   
}

function playBubbles(){
    var myAudio = document.getElementById("bubbles");
    myAudio.volume = 0.1;

    if (myAudio.paused) {
        myAudio.play();
    }     
    else {
        myAudio.pause()
    }   
}
