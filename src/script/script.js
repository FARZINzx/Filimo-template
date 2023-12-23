const burgurIcon = document.querySelector(".burger");
const smallMenuHover = document.querySelector(".sml");
const scrollTop = document.querySelector(".scroll-top")
const link = document.getElementsByTagName('a')

link.forEach(element => {
  element.addEventListener("click",(e)=>{
    e.preventDefault();
  })
});


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

 
