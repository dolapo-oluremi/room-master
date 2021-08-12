const nav = document.querySelector('nav');
const hamburger = document.querySelector(".hamburger")
const closeBtn = document.querySelector(".close")
const mobile_logo = document.querySelector(".mobile-logo")
const mobileNav = document.querySelector(".nav-lists")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.add("hide");
    closeBtn.classList.remove("hide")
  nav.classList.add("bg-color")
  mobile_logo.classList.add("hide")
  mobileNav.classList.toggle("show")
})
closeBtn.addEventListener("click", ()=>{
    hamburger.classList.remove("hide");
    closeBtn.classList.add("hide") 
    nav.classList.remove("bg-color")
    mobile_logo.classList.remove("hide")
    mobileNav.classList.toggle("show")
})




