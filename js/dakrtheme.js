let darkBtn = document.getElementById('switch')
let Darkcont = document.querySelector('.darktheme')
let body = document.body
let wind = document.querySelector('.window')
let inputs = document.querySelectorAll('.window input')
let banner = document.getElementById('banner')
let addbtn = document.getElementById('add-btn')
let bannerwin = document.querySelector('.banner-win')
let sideBar = document.querySelector('#sidebar')
let iconDark = document.getElementById('icondark')
let underbar1 = document.getElementById('bar1')
let underbar2 = document.getElementById('bar2')
let underbar3 = document.getElementById('bar3')


darkBtn.addEventListener('click',()=>{
    if(darkBtn.checked){
        darking()
    }else{
        light()
    }
  
    
})
function light(){
    iconDark.src = "img/darkmode/escuro.png"
    dark(Darkcont,'#fff')
    dark(banner,'linear-gradient(#0f2555,#4c72c4)')
    dark(addbtn,'#3b5998')
    dark(body,'#f7f7f7f6')
    dark(bannerwin,'linear-gradient(#112a5f,#4f78cf)')
    dark(sideBar,'linear-gradient(#112a5f,#4f78cf)')
    dark(underbar1,'#3b5998')
    dark(underbar2,'#3b5998')
    dark(underbar3,'#3b5998')
    dark(wind,'#ffff')
    addbtn.style.boxShadow = "0px 0px 0px white"
    
}

function darking(){
    iconDark.src = "img/darkmode/claro.png"
    dark(Darkcont,'#3a3a3a')
    dark(banner,'black')
    dark(addbtn,'black')
    dark(body,'#3a3a3a')
    dark(bannerwin,'black')
    dark(sideBar,'black')
    dark(underbar1,'black')
    dark(underbar2,'black')
    dark(underbar3,'black')
    dark(wind,'#3a3a3a')
   
    for(form of inputs){
        dark(form,'white')
        
   }

}

function dark(tag,color){
    tag.style.background = color
    tag.style.transition = ".5s"
    addbtn.style.border = "none"
    addbtn.style.boxShadow = "1px 1px 2px #dimgray"
    
}