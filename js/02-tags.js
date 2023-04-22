/* const container = document.querySelector(".js-tags");
let selectedTag = null;

container.addEventListener("click", onClick);

function onClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  const currentSelectedBtn = document.querySelector(".tags__btn--active");

  if (currentSelectedBtn) {
    currentSelectedBtn.classList.remove("tags__btn--active");
  }
  const nextSelectedBtn = e.target;
  nextSelectedBtn.classList.add("tags__btn--active");

  selectedTag = nextSelectedBtn.dataset.value;
  console.log(selectedTag);
}
 */

const tagContainer = document.querySelector(".js-tags");

const selectedTag = new Set();

tagContainer.addEventListener("click", onContainerTag);

function onContainerTag(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  const btn = e.target;
  const tag = e.target.dataset.value;
  const isActive = btn.classList.contains("tags__btn--active");

  if (isActive) {
    selectedTag.delete(tag);
  } else {
    selectedTag.add(tag);
  }

  btn.classList.toggle("tags__btn--active");

  console.log(selectedTag);
}
