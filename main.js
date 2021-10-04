var speechRecognition = window.webkitSpeechRecognition;

var Recognition = new speechRecognition();

function start()
{
    document.getElementById("voice_checker").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("voice_checker").innerHTML = content;
    console.log(content);
    speak();
    
}
function speak()
{
    snyth = window.speechSynthesis;
    speakdata = document.getElementById("voice_checker").value;
    utterthis = new SpeechSynthesisUtterance(speakdata);
    snyth.speak(utterthis);  
    Webcam.attach(camera); 

    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="pic" src="'+data_uri+'"/>';
    });
}

function save()
{
    picture = document.getElementById("link");
    captured_img = document.getElementById("pic").src;
    picture.href = captured_img;
    picture.click();
}
