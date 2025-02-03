const right = document.querySelector(".right");
const left = document.querySelector(".left");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".images");

let slideNumber = 1;
let length = images.length;

const bottom = document.querySelector(".bottom");

for (let i = 0; i < length; i++) {
  let div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");

buttons[0].style.backgroundcolor = "white";

const resetBg = () =>{
  buttons.forEach((button) => {
    button.style.backgroundcolor = "transparent";
  });
};

buttons.forEach((button, i)=>{
  button.addEventListener("click", () =>{
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNumber = i + 1;
    button.style.backgroundcolor = "white";
  });
});

const changeClr = () =>{
  resetBg();
  buttons[slideNumber - 1].style.backgroundcolor = "white";
};

function rightNext() {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
}
function rightPrevi() {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
}
function leftNext() {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
}
function leftPrivi() {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slideNumber = length;
}
right.addEventListener("click", () => {
  slideNumber < length ? rightNext() : rightPrevi();
  changeClr();  
});

left.addEventListener("click", () => {
  slideNumber > 1 ? leftNext() : leftPrivi();
  changeClr();
});
