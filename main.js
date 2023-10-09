Webcam.set({
    width:350,
    height:300,
    img_format : 'png',
png_quality:90
});

prediction_1 = ""
prediction_2 = ""

camera=document.getElementById("camera")

Webcam.attach('#camera');
  
function TakeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
 
console.log('ml5 version:' , ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/O3YSVHLXY/model.json",modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
function IdentifyImage(){
   img = document.getElementById("captured_image")
   classifier.classify(img, gotResults)
  
}
function gotResults(error , results){
  if (error) {
   console.log(error) 
  } else {
    console.log(results)
    prediction_1 = results[0].label 
    prediction_2 = results[1].label
  document.getElementById("result_emoji_name").innerHTML = prediction_1
  document.getElementById("result_emoji_name2").innerHTML = prediction_2
  if(prediction_1=="Happy"){
    document.getElementById("update_emoji").innerHTML = "&#128512"
  }
  if(prediction_1=="Confused"){
    document.getElementById("update_emoji").innerHTML = "&#129300;"
  }
  if(prediction_1=="Sad"){
    document.getElementById("update_emoji").innerHTML = "&#128532;"
  }
  if(prediction_1=="Angry"){
    document.getElementById("update_emoji").innerHTML = "&#128545;"
  }
  if(prediction_2=="Happy"){
    document.getElementById("update_emoji2").innerHTML = "&#128512"
  }
  if(prediction_2=="Confused"){
    document.getElementById("update_emoji2").innerHTML = "&#129300;"
  }
  if(prediction_2=="Sad"){
    document.getElementById("update_emoji2").innerHTML = "&#128532;"
  }
  if(prediction_2=="Angry"){
    document.getElementById("update_emoji2").innerHTML = "&#128545;"
  }
  }
}


