// let display = document.querySelector("#input-box");
// let allBtns = document.querySelectorAll("button");

// let buttonsArray = Array.from(allBtns);

// let string = "";

// buttonsArray.forEach((btn) => {
//   btn.addEventListener("click",(e) => {
//     if (e.target.innerHTML == "DEL") {
//       string = string.substring(0,string.length - 1);
//       display.value = string;
//     } else if (e.target.innerHTML == "AC") {
//       string = '';
//       display.value = string;
//     } else if (e.target.innerHTML == "=") {
//       string = eval(string);
//       display.value = string;
//     } else {
//       string += e.target.innerHTML;
//       display.value = string;
//     }
//   });
// });




let display = document.querySelector('#input-box');
let allBtns = document.querySelectorAll('button');

let buttonsArray = Array.from(allBtns)
let string = "";

buttonsArray.forEach((btns) => {
  btns.addEventListener('click', (e) => {
    console.log(e.target)

    if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    }
    else if (e.target.innerHTML == 'AC') {
      string = "";
      display.value = string;
    }
    else if (e.target.innerHTML == "=") {
      if(!string) return
      string = String(eval(string))
      display.value = string
    }
   
    else {
      string += e.target.innerHTML;
      display.value = string
    }

  })
})
















