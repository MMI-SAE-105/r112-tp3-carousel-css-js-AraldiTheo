// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carousel__container");
const nextButon = document.querySelector(".carousel__button--next");
const prevButon = document.querySelector(".carousel__button--prev");

if (carousel) {
   prevButon.addEventListener("click", ()=>{
    carousel.scrollBy({ left: -260, behavior: "smooth" })
   }) 

    nextButon.addEventListener("click", ()=>{
     carousel.scrollBy({ left: +260, behavior: "smooth" })
    }) 
 };