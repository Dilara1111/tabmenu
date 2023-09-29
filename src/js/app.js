document.addEventListener('DOMContentLoaded',() =>{


let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let sliderImg = document.getElementById('sliderImg');
let sliderContainer = document.querySelector('.slider-container')
let currentIndex=0;
let images=[
    "src/images/baku.jpg",
    "src/images/ganja.jpg",
    "src/images/sumqayit.jpg"  
];
if(sliderImg){
    sliderImg.src=images[currentIndex]
}

function slide(){
    if(currentIndex < 0){
        currentIndex=images.length-1;
    }
    else if(currentIndex>=images.length){
        currentIndex=0;
    }
    sliderImg.src=images[currentIndex];
}
    //left arrow btn
prevBtn.addEventListener('click',()=>{
    currentIndex--;
    slide();
    });
    //right arrow button
nextBtn.addEventListener('click',()=>{
    currentIndex++;
    slide();
    });

sliderContainer.addEventListener('mouseenter',()=>{
    clearInterval(autoPlayInterval);
    });




    
  
})
let tabs=document.querySelectorAll(".tabs div")
let tabContents=document.querySelectorAll(".content div")

  for (var tab of tabs) {

        tab.addEventListener("click", function () {
            let active = document.querySelector(".active");
            active.classList.remove("active")
            this.classList.add("active");
            //Showing content
            let index = this.getAttribute("data-index");
            for (let content of tabContents) {
                if (content.getAttribute("data-index") == index) {
                    content.classList.add("show")
                } else {
                    content.classList.remove("show")
                }
            }
        })
    }