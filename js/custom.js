
var logo = document.getElementById("logo");
console.log(logo);

const button = document.getElementById("btn-moon");
button.addEventListener("click", darkMode);

const html = document.getElementById("mode");
var mode = html.getAttribute("data-bs-theme");



const passwordButton = document.getElementById("hideButton");
passwordButton.addEventListener("click",passwordShow );

var x = document.getElementById("floatingPassword");




function darkMode(){
    if(mode == "light"){
        html.setAttribute("data-bs-theme","dark");
        mode = html.getAttribute("data-bs-theme");
        button.classList.add("active");
        document.getElementById("body1").classList.remove("bg-img");


    }
    else{
        html.setAttribute("data-bs-theme","light");
        mode = html.getAttribute("data-bs-theme");
        button.classList.remove("active");
        document.getElementById("body1").classList.add("bg-img");
        
    }
}


function passwordShow() {
    var x = document.getElementById("floatingPassword");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("showPass").classList.remove("bi-eye-slash-fill");
      document.getElementById("showPass").classList.add("bi-eye-fill");
    
    
    } else {
      x.type = "password";
      document.getElementById("showPass").classList.remove("bi-eye-fill");
      document.getElementById("showPass").classList.add("bi-eye-slash-fill");
    
    }
}


