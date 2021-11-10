song1 = "";
song2 = "";
leftWrist = "";
rightWrist = "";

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist;
        leftWristY = results[0].pose.leftWrist;
        console.log("leftWrist = " + leftWrist + " leftWrist = " + leftWrist);

        rightWristX = results[0].pose.rightWrist;
        rightWristY = results[0].pose.rightWrist;
        console.log("rightWrist = " + rightWrist + "rightWrist = " + rightWrist);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);

    fill("#FF7F7F")
    stroke("#90ee90")

}