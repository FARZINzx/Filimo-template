const burgurIcon = document.querySelector(".burger");
const smallMenuHover = document.querySelector(".sml");
const scrollTop = document.querySelector(".scroll-top")

// if(window.scrollY>0){
//      scrollTop.style.display = "block"
// }else{
//      scrollTop.style.display = "none"
//}

setInterval(console.log(window.scrollY) , 100)

const scrollBtnDisplay = function () {
  window.scrollY > 20
    ? scrollTop.style.display = "block"
    : scrollTop.style.display = "none";
};
window.addEventListener("scroll", scrollBtnDisplay);

const scrollWindow = function () {  
     if (window.scrollY != 0) {
       setTimeout(function () {
         window.scrollTo(0, window.scrollY - 50);
         scrollWindow();
       }, 30);
     }
   };

   scrollTop.addEventListener('click',scrollWindow)

 
