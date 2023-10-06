const preloader = document.querySelector("[data-preloader]"); 

window.addEventListener("load", () => {
    preloader.classList.add("remove");
});
// alert("working");

// add event on multiple elements

const addEventOnElements = function(elements, eventType, callback){
    for(let i = 0, len = elements.length; i <len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}
// navbar toggler for mobile
const navbar = document.querySelector("[data-navbar]");
const navToggler =  document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("data-overlay");

const toggleNav = function(){
    navbar.classList.toggle("active");
    overlay.classList.toogle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navToggler, "click", toggleNav);

// Header
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function() {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
})

const sendData = document.querySelector(".input-btn");
const getdata = document.querySelector(".input-field");


sendData.addEventListener("click", () =>{
    alert(getdata.value + " is added to our list") ;
    alert("Thank you for your feedback") ;
})

function signUp(){
    window.prompt("Enter your e-mail : ");
}

const signUpBtn = document.querySelector(".signup-btn");

signUpBtn.addEventListener("click", () => {
    signUp();
})