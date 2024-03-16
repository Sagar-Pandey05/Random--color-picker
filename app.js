let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let head = document.querySelector("h1");
    let getRandomColor = randomColor(); 
    head.innerText = getRandomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = getRandomColor;
    
})

function randomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}