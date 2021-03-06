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
   /*a constante vai receber o header do item selecionado */
  const accordionHeader = item.querySelector('.value__accordion-header'); 

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
const sections = document.querySelectorAll('section[id]');
/**adicionando à constante todas as sections que contenha um id */
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset; /*o mesmo que scrollY*/
    /**adicionando à constante a posição do scroll */

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight, /*const recebe a altura da section */
			    sectionTop = current.offsetTop - 58, /* const recebe a posição superior (em pixels) em relação ao pai*/
			    sectionId = current.getAttribute('id'), /*const recebe o id da posição current*/
			    sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		} 
	});
}
window.addEventListener('scroll', scrollActive);


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
