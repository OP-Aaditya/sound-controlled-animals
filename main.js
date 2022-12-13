function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pItZcIu_t/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){

  if(error){
    console.log(error);
  }
  else{

console.log(results);

    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;

    document.getElementById("i_can").innerHTML="I can hear - " + results[0].label;
    document.getElementById("accuracy").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("i_can").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("accuracy").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img=document.getElementById("listen");

      detect_dog=0;
      detect_lion=0;
      detect_elephant=0;
      detect=null;

    if(results[0].label == "Barking"){
      img.src="dog.webp";
        detect_dog=detect_dog+1;
        detect="Detected dog - "+detect_dog+" Detected lion - "+detect_lion+" Detected elephant - "+detect_elephant;
    }
     else if(results[0].label == "Roar" ){
      img.src="lion-roar.gif";
      detect_lion=detect_lion+1;
      detect="Detected dog - "+detect_dog+" Detected lion - "+detect_lion+" Detected elephant - "+detect_elephant;
     }
     else if(results[0].label == "trumpet" ){
      img.src="ele.gif";
      detect_elephant=detect_elephant+1;
      detect="Detected dog - "+detect_dog+" Detected lion - "+detect_lion+" Detected elephant - "+detect_elephant;
     }
     else{
      img.src="listen.gif";
     }

     document.getElementById("detect").innerHTML="Detected dog- "+detect_dog+" Detected lion- "+detect_lion+" Detected elephant- "+detect_elephant;
  }

}