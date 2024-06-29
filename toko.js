// live chat
window.$crisp=[];window.CRISP_WEBSITE_ID="7af10da8-ba4e-4478-95b4-e07f088a900c";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
// icon menunya
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

// menghapus menu 
const navLink = document.querySelectorAll('.nav__link'),
    navMenu = document.getElementById('nav-menu')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// slide section NAvBar
const section = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active')

        }
    })
}

// ganti warna header
window.onscroll = ()=>{
    const nav = document.getElementById('header')
    if(this.scrollY >=200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

// slideshow produk B1
var slideIndex = 1;
showSlides(slideIndex);

// tombol next 
function plusSlides(n){
    showSlides(slideIndex += n);
}

// Thumbnail gambar
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides")
    var dots = document.getElementsByClassName("dot")
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active"
}