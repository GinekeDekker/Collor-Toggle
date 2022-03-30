let mouseenter = function () {
  document.getElementById("menu-ul-container").style.display = "block";
};

let mouseleave = function () {
  document.getElementById("menu-ul-container").style.display = "none";
};

let hamburgerHover = document.getElementById("menu-container");
hamburgerHover.onmouseenter = mouseenter;
hamburgerHover.onmouseleave = mouseleave;

changeBackgroundColor = function (color) {
  document.body.style.backgroundColor = color;
  document.getElementsByTagName(
    "title"
  )[0].innerHTML = `Color Toggle: ${color}`;
  mouseleave();
};

const greyFunction = function () {
  changeBackgroundColor("lightgrey");
  document.getElementById("buttonGrey").checked = true;
  document.getElementsByTagName("title")[0].innerHTML = "Color Toggle: home";
};
document.getElementById("bg-grey").onclick = greyFunction;

const redFunction = function () {
  changeBackgroundColor("red");
  document.getElementById("buttonRed").checked = true;
};
document.getElementById("bg-red").onclick = redFunction;

const orangeFunction = function () {
  changeBackgroundColor("orange");
  document.getElementById("buttonOrange").checked = true;
};
document.getElementById("bg-orange").onclick = orangeFunction;

const purpleFunction = function () {
  changeBackgroundColor("purple");
  document.getElementById("buttonPurple").checked = true;
};
document.getElementById("bg-purple").onclick = purpleFunction;

const greenFunction = function () {
  changeBackgroundColor("green");
  document.getElementById("buttonGreen").checked = true;
};
document.getElementById("bg-green").onclick = greenFunction;

document.addEventListener("keypress", function (event) {
  if (event.key === "1") {
    greyFunction();
  } else if (event.key === "2") {
    redFunction();
  } else if (event.key === "3") {
    orangeFunction();
  } else if (event.key === "4") {
    purpleFunction();
  } else if (event.key === "5") {
    greenFunction();
  }
});
