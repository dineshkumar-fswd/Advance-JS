let a = document.getElementById("heading");
let b = a.innerText;
console.log(a);

// change text
function amuthu() {
  a.innerHTML = "<h6>Hi makale</h6>";
}
function amuthu2() {
  a.innerText = "Hi mapla";
}

//change style
function styles() {
  a.style.color = "blue";
  a.style.fontSize = "40px";
}
//change style by css
function stylesbyclasslist() {
  a.classList.add("newstyle");
}

// Creating and addind elements
let list = document.getElementById("list");
console.log(list.textContent);
//queryselector
let all = document.querySelectorAll("li");
//creating element
function listitem() {
  let listitem = document.createElement("li");
  listitem.innerText = "Banana";
  list.appendChild(listitem);
}
