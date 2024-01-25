function setup()
{
    video=createCapture(VIDEO);
    video.size(500, 500);

    canvas=createCanvas(500, 500);
canvas.position(550, 200)

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
    }
}