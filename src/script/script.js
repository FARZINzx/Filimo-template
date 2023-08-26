const burgurIcon = document.querySelector(".burger");
const smallMenuHover = document.querySelector(".sml");
let scrollTop = document.querySelector(".scroll-top")

burgurIcon.addEventListener('mouseEnter',()=>{
     smallMenuHover
})

const scrollWindow = function () {  
     if (window.scrollY != 0) {
       setTimeout(function () {
         window.scrollTo(0, window.scrollY - 50);
         scrollWindow();
       }, 10);
     }
   };

   scrollTop.addEventListener('click',scrollWindow)

 
