let disk;

function setup() {
  createCanvas(innerWidth, innerHeight);
  disk = new Disk(width / 2, height / 2, 30)
  disk2 = new Disk(width / 2, height / 2, 30)
  disk3 = new Disk(width / 2, height / 2, 30)
  disk4 = new Disk(width / 2, height / 2, 30)
}

function draw() {
  background(0, 5);
  disk.update();
  disk.draw();
  disk2.update();
  disk2.draw();
  disk3.update();
  disk3.draw();
  disk4.update();
  disk4.draw();
}
