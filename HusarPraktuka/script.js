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
// 1. Отримання елементів DOM (Унікальні ID)
const hireModal = document.getElementById('hire-user-modal');
const hireBtnTrigger = document.getElementById('hire-me-modal-trigger'); 
const hireCloseBtn = document.querySelector('.hire-modal-close-btn');
const hireContactForm = document.getElementById('hire-contact-form');

// 2. Функція для відкриття модального вікна
if (hireBtnTrigger) {
    hireBtnTrigger.onclick = function() {
        hireModal.style.display = 'block';
    }
}

// 3. Функція для закриття модального вікна при кліку на 'x'
if (hireCloseBtn) {
    hireCloseBtn.onclick = function() {
        hireModal.style.display = 'none';
    }
}

// 4. Функція для закриття модального вікна при кліку за межами
window.addEventListener('click', function(event) {
    if (event.target === hireModal) {
        hireModal.style.display = 'none';
    }
});

// 5. Обробка відправки форми 
if (hireContactForm) {
    hireContactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        // Отримання даних форми 
        const formData = {
            name: document.getElementById('hire-name').value,
            email: document.getElementById('hire-email').value,
            service: document.getElementById('hire-service').value,
            details: document.getElementById('hire-project-details').value
        };
        
        console.log('Дані, які будуть відправлені:', formData);

        // *** Вставте тут ваш реальний код для відправки даних на сервер/пошту ***
        
        // Імітація успішної відправки:
        alert('Дякую, ' + formData.name + '! Ваш запит успішно надіслано.');
        
        // Закриття модального вікна та очищення форми
        hireModal.style.display = 'none';
        hireContactForm.reset();
        
    });
}
    