// Función para alternar la reproducción de música de fondo
function toggle_music() {
    var audio = document.getElementById("bgm");
    if (!audio) return;
    audio.volume = 0.5;
    if (audio.paused) {
        audio.play().catch(function(err){
            alert("Reproducción fallida:", err);
        });     
    } else {
        audio.pause();
    }
}

//Funcion para mostrar y ocultar el formulario de búsqueda y el cart
let searchForm = document.querySelector('.search_form');
document.querySelector('#search_btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

}
let shoppingCart = document.querySelector('.shopping_cart');
document.querySelector('#cart_btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');

}
let loginForm = document.querySelector('.login_form');
document.querySelector('#login_btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');

}
let navbar = document.querySelector('.navbar');
document.querySelector('#burger_btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

    // Cambia el fondo del header segun el scroll
    // let header = document.querySelector('header');
    // if(window.scrollY > 100){ // cuando baje más de 100px
    //     header.style.background = 'rgba(28, 59, 74, 0.95)'; // color más oscuro/opaco
    // } else {
    //     header.style.background = 'var(--Transparente)'; // color original
    // }

    // Cambia el fondo del header segun la seccion
    let header = document.querySelector('header');
    let featuresSection = document.querySelector('#features');
    let productsSection = document.querySelector('#products');  
    let categoriesSection = document.querySelector('#categories');
    let reviewSection = document.querySelector('#review');
    let blogsSection = document.querySelector('#blogs');
    
    //Estando en Blogs
    if(window.scrollY >= (blogsSection.offsetTop - 200)){
        header.style.background = 'var(--NieblaCostera)';
    }
    //Estando en Review
    else if(window.scrollY >= (reviewSection.offsetTop - 200)){
        header.style.background = 'var(--MangleToxico)';      
    }
    //Estando en Categories
    else if(window.scrollY >= (categoriesSection.offsetTop - 200)){
        header.style.background = 'var(--MagmaDiablillo)';
    }
    // Estando en Products
    else if(window.scrollY >= productsSection.offsetTop - 200){
        header.style.background = 'rgba(216, 129, 28, 0.98)';
    }
    // Estando en Features
    else if(window.scrollY >= featuresSection.offsetTop - 170){
        header.style.background = 'var(--MarProfundo)'; 
    }
   
    // Por defecto
    else {
        header.style.background = 'var(--Transparente)';
    }
}

// Initialize Swiper 1 (code from the Swiper.js documentation)
var swiper = new Swiper(".product_slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1020: {
        slidesPerView: 3,
    },
    },
});
// Initialize Swiper 2 (code from the Swiper.js documentation)
var swiper = new Swiper(".review_slider", {
    loop: true,
    spaceBetween: 100,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1020: {
        slidesPerView: 3,
    },
    },
});