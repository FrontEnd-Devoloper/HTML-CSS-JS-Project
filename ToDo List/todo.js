const input = document.getElementById("inpu");
const text = document.querySelector(".text");
const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector("i");

addBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please Enter Task");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${input.value} <i class="fa fa-trash-o"></i>`;
    text.appendChild(newEle);
    input.value = "";
    newEle.querySelector("i").addEventListener("click",() => {
      newEle.remove();
    }); 
  }
});
