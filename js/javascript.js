let btn = document.getElementsByClassName("toup")[0];

window.onscroll = function(){
    if(window.scrollY >= 600){
        btn.style.setProperty("display","block");
    }else {
        btn.style.setProperty("display", "none")
    }
}

btn.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})