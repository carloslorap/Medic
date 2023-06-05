const navItem=document.querySelector('#nav_items');
const openNavBtn=document.querySelector('#open_nav-btn');
const closeNavBtn=document.querySelector('#close_nav-btn');

/////cuando de click al boton de menu se la aparece la tabla
openNavBtn.addEventListener('click',()=>{
    navItem.style.display='flex';
    openNavBtn.style.display='none';
    closeNavBtn.style.display='inline-block';
});

//esto es para cerrar la tabla y volver al icono de  menu
const closenav=()=>{
    navItem.style.display='none';
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display='none';
}

//funtion click de cerrar
closeNavBtn.addEventListener('click',closenav)


/// slider de la section de testimonial
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    //responsive
    breakpoints: {
        600:{
            slidesPerView:2
        },
        1124:{
            slidesPerView:3
        }
    }
  });


  ///cierra menu cuando dé click algun menu en responsive

  if(window.innerWidth <  1200){
    document.querySelectorAll('#nav_items li a').forEach(navItem =>{
        navItem.addEventListener('click',()=>{
            closenav();
        });
    })
  }