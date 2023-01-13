let images = document.querySelectorAll(".inactive");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let count = 0;

function next() {
  move(next);
}

function prev() {
  move(prev);
}
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

function move(btn) {
  images[count].classList.remove("active");
  if (btn === next) {
    if (count < images.length - 1) {
      count++;
    } else {
      count = 0;
    }
  } else if (btn === prev) {
    if (count > 0) {
      count--;
    } else {
      count = images.length - 1;
    }
  }
  images[count].classList.add("active");
}