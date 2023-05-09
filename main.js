const $btn = $("#btn");

$btn.click((e) => {
  e.preventDefault();
  
  const $name = $("#name");
  const $pass = $("#pass");
  const $form = $("#form");
  
  const passValue = $pass.val();
  
  $name.toggleClass("is-invalid", $name.val().length > 10);
  $name.toggleClass("is-valid", $name.val().length <= 10);
  
  const cont = passValue.match(/[A-Z]/g)?.length ?? 0;
  
  $pass.toggleClass("is-invalid", cont === 0);
  $pass.toggleClass("is-valid", cont > 0);
});



// carrusel


/* 
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
}) */

const $botonl = $("#boton");
const $botonr = $("#botonR");
const $imgs = $(".carrusel__item");
const $slider = $("#slider");
const $last = $(".carrusel__item")[$(".carrusel__item").length-1];
$slider.prepend($last);
const next = ()=>{
  const $first = $(".carrusel__item")[0];
  $imgs.addClass("slide");
  $imgs.css("transition", "all 0.4s ease-in-out");
  setTimeout((e)=>{
    $imgs.css("transition", "none");
    $imgs.removeClass("slide");
    $slider.append($first);
  },400);
}
const prev = ()=>{
  const $last = $(".carrusel__item")[$(".carrusel__item").length-1];
  $imgs.addClass("slidel");
  $imgs.css("transition", "all 0.4s ease-in-out");
  setTimeout((e)=>{
    $imgs.css("transition", "none");
    $imgs.removeClass("slidel");
    $slider.prepend($last);
  },400);
}
$botonr.click((e)=>{
  next();
});
$botonl.click((e)=>{
  prev();
});
setInterval((e)=>{
  next();
},5000);