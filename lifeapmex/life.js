let ellipses = document.querySelectorAll(".ellipse")


for (let i = 0 ; i < ellipses.length ; i++ ) {
    ellipses[i].addEventListener("click", ellipseActive);
}

function ellipseActive() {

for (let i = 0 ; i < ellipses.length ; i++ ) {
   if (ellipses[i].classList.contains("ellipse-active")) {
    ellipses[i].classList.remove("ellipse-active")
   }
}


this.classList.add("ellipse-active")
}