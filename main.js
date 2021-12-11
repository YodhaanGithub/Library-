function preload() {
}

function setup() {
    canvas=  createCanvas(640, 480);
    canvas.position(110, 250);
    video =  createCapture(VIDEO);
    video.hide();

    tint_color="";
}

      function draw() {
          image(video, 0, 0, 640, 480);
          tint(tint_color);
          circle(30, 30, 30);
          rect(50, 60, 55, 55);
          circle(30, 450, 30)
          rect(50, 370, 55, 55);
          circle(610, 30, 30);
          rect(530, 60, 55, 55);
          circle(610, 450, 30);
          rect(530, 370, 55, 55);
      }

      function take_snapshot() {
          save('student_name.png');
      }

      function filter_tint() {
          tint_color = document.getElementById("color_name").value;
      }