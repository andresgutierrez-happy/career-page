let images = document.querySelectorAll(".inactive")
let prevBtn = document.querySelector(".prev-btn")
let nextBtn = document.querySelector(".next-btn")
let count = 0;

function next() {
    
        move(next)
    
}

function prev() {
    move(prev)
}
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
    
            function move(btn) {
                images[count].classList.remove("active")
                if (btn === next){
                    if (count < images.length - 1) {
                    count++
                    } else {
                        count = 0;
                    }
                } else if ( btn === prev) {
                    if (count > 0) {
                        count--
                    }else{
                        count = images.length -1;
                    }
                    
                }
                images[count].classList.add("active")
            }

/* function imageActive() {

for (let i = 0 ; i < images.length ; i++ ) {
   if (images[i].classList.contains("active")) {
    images[i].classList.remove("active")
   }
}


this.classList.add("active")
}
if (e[i].classList.contains("active")){
    e.classList.remove("active")
}
this.classList.add("active") */