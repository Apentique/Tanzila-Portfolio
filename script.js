window.addEventListener("scroll", function(){

let nav = document.querySelector("nav");

if(window.scrollY > 50){
nav.style.background = "#ffffff";
nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
}else{
nav.style.background = "transparent";
nav.style.boxShadow = "none";
}

});
