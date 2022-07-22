/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.querySelector('#header');    
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header');    
}
window.addEventListener('scroll', scrollHeader)


/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidersPerView: 'auto',
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item');

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.value__accordion-header');
  /*a constante vai receber o header do */

  accordionHeader.addEventListener('click', ()=>{
    const openItem = document.querySelector('.accordion-open');

    toggleItem(item);

    if(openItem && openItem !== item){
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) =>{
  const accordionContent = item.querySelector('.value__accordion-content');

  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  }else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
