//start classification define
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    //define sound classifier
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KI65it8pw/model.json', modelReady);    
}
//define fun model ready
function modelReady() {
    classifier.classify(gotResults);
}
//define fun got result fun
function gotResults(error,results) {
    if (error) {
        console.error(error);
    }else{
console.log(results);

random_r= Math.floor(Math.random()* 255 ) + 1;
random_g= Math.floor(Math.random()* 255 ) + 1;
random_b= Math.floor(Math.random()* 255 ) + 1;

document.getElementById("result_label").innerHTML="I can hear-" + results[0].label;

document.getElementById("result_confidence").innerHTML="Accuracy-" + (results[0].confidence * 100).toFixed(2) +"%";

document.getElementById("result_label").style.color="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";

document.getElementById("result_confidence").style.color="rgb(" + random_r + ","+ random_g + ","+ random_b + ")";

img1= document.getElementById('alien01');
img2= document.getElementById('alien02');
img3= document.getElementById('alien03');
img4= document.getElementById('alien04');

if (results[0].label == "Clap") {
    img1.src='aliens-01.gif';
    img2.src='aliens-02.png';
    img3.src='aliens-03.png';
    img4.src='aliens-04.png';
    console.log("clap")
}else if (results[0].label == "Snap") {
    img1.src='aliens-01.png';
    img2.src='aliens-02.gif';
    img3.src='aliens-03.png';
    img4.src='aliens-04.png';
    console.log("snap")
}else if (results[0].label == "Utensil") {
    img1.src='aliens-01.png';
    img2.src='aliens-02.png';
    img3.src='aliens-03.gif';
    img4.src='aliens-04.png';
    console.log("utensil")
}else {
    img1.src='aliens-01.png';
    img2.src='aliens-02.png';
    img3.src='aliens-03.png';
    img4.src='aliens-04.gif';
    console.log("bn")
}

}
}


