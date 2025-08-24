// Adding Element
let addelement = document.getElementById("addcontent");
addelement.addEventListener("click", function () {
  let add = document.createElement("p");
  add.innerText = "This Element is added by Event Listerners";
  document.body.appendChild(add);
});

//dark and white mode
let dark = document.getElementById("darkmode");
dark.addEventListener("dblclick", function () {
  document.body.classList.toggle("dark");
});
