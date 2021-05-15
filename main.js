status="";
object_name="";
objects=[];
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
    object_name=document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log("Model is loaded!");
    status=true;
}
function draw(){
    image(video,0,0,300,220);
    if(status!=""){
        objectDetector.detect(video,gotResult);
        for(i=0; i<objects.length;  i++){
            document.getElementById("status").innerHTML="Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML="Number of objects detected are :"+objects.length;

            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
                text(objects[i].label+" "+percent+"%",objects[i].x+15, objects[i].y+15);
                noFill();
                stroke("#FF0000");
                rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
                if(object_name==objects[i].label){
                    document.getElementById("object_found").innerHTML=object_name+" found";
                }
                else{
                    document.getElementById("object_found").innerHTML=object_name+" not found";
                }
        }
}
}
    function gotResult(error,results){
        if(error){
            console.log(error);
        }
        console.log(results);
        objects=results;
    }