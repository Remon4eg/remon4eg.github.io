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