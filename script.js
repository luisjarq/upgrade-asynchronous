// 1.1
fetch("https://api.agify.io?name=michael")
  .then((res) => res.json())
  .then((json) => console.log(json));

// 1.2
const baseUrl = "https://api.nationalize.io?name=";
function callAPI() {
  const name = document.querySelector("input").value;
  fetch(baseUrl + name)
    .then((res) => res.json())
    .then((json) => {
      result = json;
      console.log(json);
    });
}
document.querySelector("button").addEventListener("click", callAPI);

// 2.3
function addLiToContainer(container, ...data) {
  let li = document.createElement("li");
  li.textContent = `El nombre ${data[0]} tiene un ${data[1].probability} porciento de ser de ${data[1].country_id}`;
  container.appendChild(li);
}
let ul = document.createElement("ul");
ul.id = "containerList";
document.body.appendChild(ul);
function callAPIandPrint() {
  const name = document.querySelector("input").value;
  fetch(baseUrl + name)
    .then((res) => res.json())
    .then((json) => {
      let container = document.getElementById("containerList");
      json.country?.forEach((e) => addLiToContainer(container, name, e));
    });
}
document.querySelector("button").addEventListener("click", callAPIandPrint);

// 2.4 Async
function removeElement(event) {
  let div = event.target.parentElement;
  console.log(div);
  div.parentElement.removeChild(div);
}
function addLiandBtnToContainer(container, ...data) {
  let div = document.createElement("div");
  let li = document.createElement("li");
  li.textContent = `El nombre ${data[0]} tiene un ${data[1].probability} porciento de ser de ${data[1].country_id}`;
  let btn = document.createElement("button");
  btn.innerText = "Borrame!";
  btn.addEventListener("click", removeElement);
  div.appendChild(li);
  div.appendChild(btn);
  container.appendChild(div);
}
async function callApiAsync() {
  const name = document.querySelector("input").value;
  let response = await fetch(baseUrl + name);
  let json = await response.json();
  let container = document.getElementById("containerList");
  json.country?.forEach((e) => addLiandBtnToContainer(container, name, e));
}
document.querySelector("button").addEventListener("click", callApiAsync);
