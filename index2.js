const colors = ["green", "red" , "rgba(133,122,200)","#f15025" ] ;
const btn = document.querySelector("#btn") ;
const color = document.querySelector(".color") ;

btn.addEventListener ('click', function () {
    document.body.style.backgroundColor = getRandomColor () ;
    
})

function getRandomColor () {
    let randomColor = (Math.floor(Math.random()*colors.length)) ;
    return colors[randomColor]
}