function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(700, 500);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw() {
    background('#1d1d1d');
}

function modelLoaded() {
    console.log("Posenet Loaded");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
    }
}