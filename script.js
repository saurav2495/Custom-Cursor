var body = document.querySelector("body");
var cursor = document.querySelector("#cursor");
var h1 = document.querySelector("h1");

body.addEventListener("mousemove", (dets) => {
  //   cursor.dets.x;
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});

h1.addEventListener("mouseenter", () => {
  cursor.style.scale = 3;
});

h1.addEventListener("mouseout", () => {
  cursor.style.scale = 1;
});
