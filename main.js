var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
    
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    speak();
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
})

function speak(){
    var synth = window.speechSynthesis;
    var acoustic_data="taking your selfie in 5 seconds";
    var utterance=new SpeechSynthesisUtterance(acoustic_data);
    synth.speak(utterance);
    Webcam.attach(camera);
    setTimeout(function(){
        takeselfie(),
        save()
    },5000)
}

function takeselfie(){
    Webcam.snap(function(img){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+img+'">'
    })

}

function save(){
    var di=document.getElementById("download_img");
    var selfie_img=document.getElementById("selfie").src;
    di.href=selfie_img;
    di.click();
}