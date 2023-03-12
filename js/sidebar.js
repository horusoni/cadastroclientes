let sidebar = document.getElementById('sidebar')
let circle = document.getElementById('circle')
let bar1 = document.getElementById('bar1')
let bar2 = document.getElementById('bar2')
let bar3 = document.getElementById('bar3')

circle.addEventListener('click',()=>{
    circle.style.left = "75px"
    circle.style.backgroundColor = "initial"
    circle.style.transform = "rotate(360deg)"
    sidebar.style.left = "0px"
    bar1.style.backgroundColor = "#FFFF"

    bar2.style.transform = "rotate(60deg)"
    bar2.style.left = "-4px"
    bar2.style.top = "27px"
    bar2.style.backgroundColor = "#FFFF"

    bar3.style.transform = "rotate(-60deg)"
    bar3.style.left = "14px"
    bar3.style.top = "27px"
    bar3.style.backgroundColor = "#FFFF"
})

sidebar.parentNode.addEventListener('mousedown',()=>{
    circle.style.backgroundColor = "#FFFF"
    circle.style.left = "15px"
    sidebar.style.left = "-200px"
    bar1.style.backgroundColor = "#000" 
    circle.style.transform = "rotate(0deg)"

    bar2.style.transform = "rotate(0deg)"
    bar2.style.left = "5px"
    bar2.style.top = "21px"
    bar2.style.backgroundColor = "#000"

    bar3.style.backgroundColor = "#000"
    bar3.style.transform = "rotate(0deg)"
    bar3.style.left = "5px"
    bar3.style.top = "31px"
})