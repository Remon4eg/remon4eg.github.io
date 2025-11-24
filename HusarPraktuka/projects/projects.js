document.addEventListener('DOMContentLoaded', function() {
    const swiperElement = document.querySelector('.featured-swiper-cards');
    
    if (swiperElement) {
        const swiper = new Swiper('.featured-swiper-cards', {
            slidesPerView: 1, 
            spaceBetween: 30, 
            loop: false, 

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const projectLightbox = new SimpleLightbox('.case-study-lightbox', {
        captionsData: 'data-caption', 
        closeText: 'Закрити (Esc)', 
        navText: ['←', '→'], 
        disableScroll: true, 

    });
});

    const contactBtn = document.getElementById("contactBtn");
    const modal = document.getElementById("contactModal");
    const closeModal = document.getElementById("closeModal");

    contactBtn.onclick = () => {
        modal.style.display = "flex";
    }

    closeModal.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    }
  let mybutton = document.getElementById("scrollToTopBtn");

  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  mybutton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });