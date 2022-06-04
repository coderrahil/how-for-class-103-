Webcam.set 
({ 
    width : 350,
    height: 300,
    Image_format: "png",
    png_quality:90
});
camera=document.getElementById("camera");
webcam.attach("#camera");

function take_snapshot()
{
    webcam.snap(function( data_uri){
   document.getElementById("result").innerHTML='<img id = "capture_image" src=' +data_uri+'">';
   }); 
}
console.log("m15 version:",m15.version);
classifier=m15. imageClassifier("https://teachablemachine.withgoogle.com/models/G0jwp2Jcp/model.json",modelLoaded);
function modelLoaded()
{
    console.log("model loaded !!!");
}
