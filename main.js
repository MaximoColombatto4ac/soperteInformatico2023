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


const $botonr = $("#botonR");
const imgs = $(".img-carrusel");
console.log(imgs);
$botonr.click((e)=>{
  const firstImg = $(".img-carrusel")[0];
  $imgs.toggleClass("slide");
  setTimeout(()=>{
    $(".carrusel").insertAdjacentElement('beforeend', firstImg)
    $imgs.toggleClass("slide");
  },800);
});