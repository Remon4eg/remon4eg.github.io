document.addEventListener('DOMContentLoaded', function() {
    // 1. Знаходимо наш контейнер за класом, який ми присвоїли (featured-swiper-cards)
    const swiperElement = document.querySelector('.featured-swiper-cards');
    
    if (swiperElement) {
        // 2. Ініціалізуємо новий екземпляр Swiper
        const swiper = new Swiper('.featured-swiper-cards', {
            // Опції для відображення карток
            slidesPerView: 1, // Базово (для мобільних) показуємо 1 слайд
            spaceBetween: 30, // Відстань між картками
            loop: false, 

            // Навігація (стрілки)
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // Пагінація (точки внизу)
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Адаптація: на великих екранах показуємо більше карток
            breakpoints: {
                // Планшети (коли ширина екрана >= 768px)
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                // Десктопи (коли ширина екрана >= 1024px)
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }
        });
    }
});
// ... (Ваш код Swiper JS тут) ...

// Ініціалізація SimpleLightbox
document.addEventListener('DOMContentLoaded', function() {
    // Lightbox для галереї проєктів
    const projectLightbox = new SimpleLightbox('.case-study-lightbox', {
        // Опції:
        captionsData: 'data-caption', // Бере опис з нашого нового атрибута
        closeText: 'Закрити (Esc)', // Текст для кнопки закриття
        navText: ['←', '→'], // Стрілки навігації
        disableScroll: true, // Забороняє прокрутку сторінки, коли Lightbox відкрито
        
        // **ВАЖЛИВО:** За замовчуванням SimpleLightbox закривається по кліку на зображення,
        // тому додаткові налаштування тут не потрібні.
    });
});

    const contactBtn = document.getElementById("contactBtn");
    const modal = document.getElementById("contactModal");
    const closeModal = document.getElementById("closeModal");

    // Відкрити модалку
    contactBtn.onclick = () => {
        modal.style.display = "flex";
    }

    // Закрити натиском на Х
    closeModal.onclick = () => {
        modal.style.display = "none";
    }

    // Закриття по кліку поза модалкою
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    }
    // Отримуємо кнопку
  let mybutton = document.getElementById("scrollToTopBtn");

  // Коли користувач прокручує сторінку на 200px від верху, показати кнопку
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

  // Коли користувач клікає на кнопку, прокрутити сторінку до верху
  mybutton.addEventListener('click', function() {
    // Використовуємо 'smooth' для плавної анімації прокрутки
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });