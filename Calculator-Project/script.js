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

let display = document.getElementById("input-box");
let button = document.querySelectorAll("button");

let buttonsArray = Array.from(button);
let string = "";

buttonsArray.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});

// Example of Array.from();

// let myName = '24681012';
// let result = Array.from(myName, toNum);
// console.log(result);

// function toNum(x){
//   return Number(x)
// }

// let myName = '24681012';
// let result = Array.from(myName, Number);
// console.log(result);
// console.log(typeof(result))

// let firstName = function(){
//   return Array.from(arguments).join('');
// }

// let print = firstName("P", "r", 'i', "n", "c", "e" );
// console.log(print);

// let fruits = ["Apple", "Banana", "Papaya", "Grapes", "Kiwi"];

// fruits.forEach(fall);
// function fall(item){
//   console.log(item);
// }

// fruits.forEach((fruits)=>{
//   console.log(fruits)
// })

// fruits.forEach((fruits, index)=>{
//   console.log(index + " - " +fruits)
// })





// Example of substring

  // let input = document.querySelector('#input');
  // let button = document.querySelector('button');

  // button.addEventListener('click', () =>{
  //   let text = input.value;
  //   input.value = text.substring(0,text.length-1);
  // });


