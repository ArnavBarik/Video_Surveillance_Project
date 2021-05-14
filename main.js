status="";
object_name="";
function setup(){
    canvas=createCanvas(300,220);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,220);
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    document.getElementById("object_name").innerHTML=object_name;
}
function modelLoaded(){
    console.log("Model is loaded!");
    status=true;
}
function draw(){
    image(video,0,0,300,220);
}