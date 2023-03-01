 
let hideText_btn = document.getElementById("hideText_btn");
let hideText = document.getElementById("hideText");

hideText_btn.addEventListener("click",toggleText);

function toggleText(){
    hideText.classList.toggle("show");
}

let hideText_btn2 = document.getElementById("hideText_btn2");
let hideText2 = document.getElementById("hideText2");

hideText_btn2.addEventListener("click",toggleText2);

function toggleText2(){
    hideText2.classList.toggle("show");
}

let hideText_btn3 = document.getElementById("hideText_btn3");
let hideText3 = document.getElementById("hideText3");

hideText_btn3.addEventListener("click",toggleText3);

function toggleText3(){
    hideText3.classList.toggle("show");
}

let informacionExtra = document.getElementById("informacionExtra");
let contenidoExtra = document.getElementById("contenidoExtra");

informacionExtra.addEventListener("click",toggleText4);

function toggleText4(){
    contenidoExtra.classList.toggle("show");
}
 