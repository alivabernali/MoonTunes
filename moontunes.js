function rainVolume() {
    var myAudio = document.getElementsByTagName("rain");
    console.log(document.getElementById("volume1").value)
    myAudio.volume = document.getElementById("volume1").value;
    playRain2();

    if (!myAudio.paused) {
        console.log("hi!")
        myAudio.volume = document.getElementById("volume1").value;
    }
}

function playRain(){
    var myAudio = document.getElementById("rain"); 
    myAudio.volume = document.getElementById("volume1").value;  
    
    if (myAudio.paused) {
        myAudio.play();
    }     
    else {
        myAudio.pause()
    }   
}

function playRain2(){
    var myAudio = document.getElementById("rain"); 
    myAudio.volume = document.getElementById("volume1").value;  
    
    console.log(myAudio.volume) 
    myAudio.play();     
}

function wavesVolume() {
    var myAudio = document.getElementsByTagName("waves");
    console.log(document.getElementById("volume2").value)
    myAudio.volume = document.getElementById("volume2").value;
    playWaves2();

    if (!myAudio.paused) {
        myAudio.volume = document.getElementById("volume1").value;
    }
}

function playWaves(){
    var myAudio = document.getElementById("waves"); 
    myAudio.volume = document.getElementById("volume2").value;  
    
    if (myAudio.paused) {
        myAudio.play();
    }     
    else {
        myAudio.pause()
    }   
}

function playWaves2(){
    var myAudio = document.getElementById("waves"); 
    myAudio.volume = document.getElementById("volume2").value;  
    
    myAudio.play();     
}

function forestVolume() {
    var myAudio = document.getElementsByTagName("forest");
    console.log(document.getElementById("volume4").value)
    myAudio.volume = document.getElementById("volume4").value;
    playForest2();

    if (!myAudio.paused) {
        myAudio.volume = document.getElementById("volume4").value;
    }
}

function playForest(){
    var myAudio = document.getElementById("forest"); 
    myAudio.volume = document.getElementById("volume4").value;  
    
    if (myAudio.paused) {
        myAudio.play();
    }     
    else {
        myAudio.pause()
    }    
}

function playForest2(){
    var myAudio = document.getElementById("forest"); 
    myAudio.volume = document.getElementById("volume4").value;  
    
    myAudio.play();     
}

function bubblesVolume() {
    var myAudio = document.getElementsByTagName("bubbles");
    console.log(document.getElementById("volume3").value)
    myAudio.volume = document.getElementById("volume3").value;
    playBubbles2();

    if (!myAudio.paused) {
        myAudio.volume = document.getElementById("volume3").value;
    }
}

function playBubbles(){
    var myAudio = document.getElementById("bubbles"); 
    myAudio.volume = document.getElementById("volume3").value;  
    
    if (myAudio.paused) {
        myAudio.play();
    }     
    else {
        myAudio.pause()
    }    
}

function playBubbles2(){
    var myAudio = document.getElementById("bubbles"); 
    myAudio.volume = document.getElementById("volume3").value;  
    
    myAudio.play();     
}

function cloudVolume() {
    var myAudio = document.getElementsByTagName("cottoncandy");
    console.log(document.getElementById("volume5").value)
    myAudio.volume = document.getElementById("volume5").value;
    playCloud2();

    if (!myAudio.paused) {
        myAudio.volume = document.getElementById("volume5").value;
    }
}

function playCloud(){
    var myAudio = document.getElementById("cottoncandy"); 
    myAudio.volume = document.getElementById("volume5").value;  
    
    if (myAudio.paused) {
        myAudio.play();
    }     
    else {
        myAudio.pause()
    }    
}

function playCloud2(){
    var myAudio = document.getElementById("cottoncandy"); 
    myAudio.volume = document.getElementById("volume5").value;  
    
    myAudio.play();     
}

function supernovaVolume() {
    var myAudio = document.getElementsByTagName("supernova");
    console.log(document.getElementById("volume6").value)
    myAudio.volume = document.getElementById("volume6").value;
    playSupernova2();

    if (!myAudio.paused) {
        myAudio.volume = document.getElementById("volume6").value;
    }
}

function playSupernova(){
    var myAudio = document.getElementById("supernova"); 
    myAudio.volume = document.getElementById("volume6").value;  
    
    if (myAudio.paused) {
        myAudio.play();
    }     
    else {
        myAudio.pause()
    }    
}

function playSupernova2(){
    var myAudio = document.getElementById("supernova"); 
    myAudio.volume = document.getElementById("volume6").value;  
    
    myAudio.play();     
}

function dreamVolume() {
    var myAudio = document.getElementsByTagName("dreamscape");
    console.log(document.getElementById("volume7").value)
    myAudio.volume = document.getElementById("volume7").value;
    playDream2();

    if (!myAudio.paused) {
        myAudio.volume = document.getElementById("volume7").value;
    }
}

function playDream(){
    var myAudio = document.getElementById("dreamscape"); 
    myAudio.volume = document.getElementById("volume7").value;  
    
    if (myAudio.paused) {
        myAudio.play();
    }     
    else {
        myAudio.pause()
    }    
}

function playDream2(){
    var myAudio = document.getElementById("dreamscape"); 
    myAudio.volume = document.getElementById("volume7").value;  
    
    myAudio.play();     
}

function aquaVolume() {
    var myAudio = document.getElementsByTagName("aqua");
    console.log(document.getElementById("volume8").value)
    myAudio.volume = document.getElementById("volume8").value;
    playAqua2();

    if (!myAudio.paused) {
        myAudio.volume = document.getElementById("volume8").value;
    }
}

function playAqua(){
    var myAudio = document.getElementById("aqua"); 
    myAudio.volume = document.getElementById("volume8").value;  
    
    if (myAudio.paused) {
        myAudio.play();
    }     
    else {
        myAudio.pause()
    }    
}

function playAqua2(){
    var myAudio = document.getElementById("aqua"); 
    myAudio.volume = document.getElementById("volume8").value;  
    
    myAudio.play();     
}
