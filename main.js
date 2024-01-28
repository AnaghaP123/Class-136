status = "";
inputValue = "";

function setup()
{
    canvas = createCanvas(480, 320);
    canvas.center();
    video = createCapture();
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    inputValue = document.getElementById("input").value;
}

function modelLoaded()
{
    console.log("model loaded");
    status = true;
}

function draw()
{
    image(video, 0, 0, 480, 320);
}