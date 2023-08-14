/* menu elements*/
const menuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menu = document.querySelector(".menu");
const menuBg = document.querySelector(".black-screen");

/* text and image elements*/
const imageDisplay = document.querySelector(".image-one-div");
const textDisplay = document.querySelector(".text-one-div");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const mobileImages = [
    "./images/mobile-image-hero-1.jpg",
    "./images/mobile-image-hero-2.jpg",
    "./images/mobile-image-hero-3.jpg"
];
const destopImages = [
    "./images/desktop-image-hero-1.jpg",
    "./images/desktop-image-hero-2.jpg",
    "./images/desktop-image-hero-3.jpg"
];
const headerText = document.querySelector(".header-one");
const paragraphText = document.querySelector(".info");
const headers = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
]
const paragraphs = [
    `We provide unmatched quality, comfort, and style for property owners across the country.
    Our experts combine form and function in bringing your vision to life. Create a room in your
    own style with our collection and make your property a reflection of you and what you love.`,
    `With stores all over the world, it's easy for you to find furniture for your home or place of business.
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
    store locator. Any questions? Don't hesitate to contact us today.`,
    `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
    to ensure that every product is made as perfect and as consistent as possible. With three decades of
    experience in this industry, we understand what customers want for their home and office.`
]
let currentSlide = 0;

/* menu links */
const menuLinks = document.querySelectorAll(".link");

/* event listners */
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
/* change image and text*/
function changeSlide() {
    imageDisplay.style.backgroundImage = "url('" + mobileImages[currentSlide] + "')";
    headerText.textContent = headers[currentSlide];
    paragraphText.textContent = paragraphs[currentSlide];
}
function nextSlide() {
    currentSlide++;
    if (currentSlide >= mobileImages.length) {
        currentSlide = 0;
    }
    changeSlide();
}
function previousSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = mobileImages.length - 1;
    }
    changeSlide();
}

menuLinks.forEach(link => {
    link.addEventListener('click', handleLink);
})
function handleLink(e) {
    e.preventDefault();
    let target = e.target.getAttribute("href");
    let section = document.querySelector(target);

    if (section) {
        closeMenu();
        section.scrollIntoView({ behavior: "smooth" });
    }
}
