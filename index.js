
const colors = ["green","red","rgba(133,122,200)", "#f15025"] ;
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function () {

   document.body.style.backgroundColor = getRandomNumber()
   // color.textContent = colors[randomcolor] 

 })

 function getRandomNumber () {
   let randomcolor=(Math.floor(Math.random() *colors.length)) ; 
   return colors[randomcolor]
   console.log(randomcolor);
 }

