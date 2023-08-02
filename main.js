objects = [] ;
status = "";


function preload()
{
    video=createVideo("video.mp4");
    
    
}



function setup()
{
    canvas=createCanvas(480,380);
    canvas.center();
    video.hide();
}

function draw()
{
    image(video,0,0,480,380);
    if(status != "")
    {
        objectDetector.detect(video,gotresults);
        for(i=0;i<objects.length;i++)
        {
            document.getElementById("status").innerHTML = "status : Objects Detected";
            document.getElementById("no._of_ojects").innerHTML = "The no. of objects detected are : " +objects.length;
            fill("green");
            percent = floor(obejcts[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[1].x+15);
            noFill();
            stroke("pink");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);

    
        }
    }


}

function start()
{
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status = true;
    video.loop();
    video.volume(0);
    video.speed(1);

}

function gotresults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results ;
}