const ul = document.getElementById("list");
const result = document.getElementById("result");
let liSelected;
let index = -1;
let prevIndex;
let nextIndex;
document.addEventListener("keydown", (e) => {
  const len = ul.getElementsByTagName("li").length;

  //down key
  if (e.which === 40) {
    index++;
    prevIndex = index - 1;
    if (index > len - 1) {
      index = 0;
      prevIndex = len - 1;
    }
    ul.getElementsByTagName("li")[index].classList.add("selected");
    if (prevIndex >= 0)
      ul.getElementsByTagName("li")[prevIndex].classList.remove("selected");
  }

  //upkey
  else if (e.which === 38) {
    index--;
    nextIndex = index + 1;
    if (index < 0) {
      index = len - 1;
    }
    ul.getElementsByTagName("li")[index].classList.add("selected");
    ul.getElementsByTagName("li")[nextIndex].classList.remove("selected");
  }
  result.innerHTML = ul.getElementsByTagName("li")[index].textContent;
});