// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carousel__container");
const nextButon = document.querySelector(".carousel__button--next");
const prevButon = document.querySelector(".carousel__button--prev");
const premierItem = document.querySelector(".carousel__item");

const scrollAmount = premierItem.clientWidth;

if (carousel) {
   prevButon.addEventListener("click", ()=>{
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" })
   }) 

    nextButon.addEventListener("click", ()=>{
     carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" })
    }) 
 };