const container = document.querySelector(".js-container");

container.addEventListener("click", onClick);

function onClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  console.log(e.target.textContent);
}

const addBtn = document.querySelector(".js-add-btn");

addBtn.addEventListener("click", onAddBtnClick);
let labelCounter = 6;

function onAddBtnClick() {
  const itemBtn = document.createElement("button");
  itemBtn.textContent = `Кнопка ${labelCounter}`;
  itemBtn.type = "button";

  container.append(itemBtn);
  labelCounter += 1;
}
