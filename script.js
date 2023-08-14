/* menu elements*/
const menuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menu = document.querySelector(".menu");
const menuBg = document.querySelector(".black-screen");

/* text and image elements*/
const imageDisplay = document.querySelector(".image-one-div")
const textDisplay = document.querySelector(".text-one-div")
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

menuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
leftArrow.addEventListener('click', previousSlide);
rightArrow.addEventListener('click', nextSlide);

function openMenu() {
    menu.classList.add("on");
    menuBg.classList.add('on');
}
function closeMenu() {
    menu.classList.remove("on");
    menuBg.classList.remove("on");
}

function changeSlide(){
    
}
function nextSlide(){
    imageDisplay.getAttribute("src")
}
function previousSlide(){

}




// <!-- 

// We are available all across the globe

// With stores all over the world, it's easy for you to find furniture for your home or place of business.
// Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
// store locator. Any questions? Don't hesitate to contact us today.

// Shop now

// Manufactured with the best materials

// Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
// to ensure that every product is made as perfect and as consistent as possible. With three decades of
// experience in this industry, we understand what customers want for their home and office.

// Shop now

// -->