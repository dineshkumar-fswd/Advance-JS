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
// getting text inside the h1 tag
console.log("Innertext", a.innerText);

//getting value from input fields
function registerdetails() {
  let f_name = document.getElementById("f-name").value;
  let l_name = document.getElementById("l-name").value;
  let email = document.getElementById("email").value;
  let m_number = document.getElementById("m-number").value;

  console.log(`Details
    \n First Name :${f_name}
    \n Second Name :${l_name}`);
  // let details = document.createElement("p");
  // details.innerText = "Last Name" + l_name;
  // document.body.appendChild(details);
}
