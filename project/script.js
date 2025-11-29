
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

const hireModal = document.getElementById('hire-user-modal');
const hireBtnTrigger = document.getElementById('hire-me-modal-trigger'); 
const hireCloseBtn = document.querySelector('.hire-modal-close-btn');
const hireContactForm = document.getElementById('hire-contact-form');

if (hireBtnTrigger) {
    hireBtnTrigger.onclick = function() {
        hireModal.style.display = 'block';
    }
}


if (hireCloseBtn) {
    hireCloseBtn.onclick = function() {
        hireModal.style.display = 'none';
    }
}

window.addEventListener('click', function(event) {
    if (event.target === hireModal) {
        hireModal.style.display = 'none';
    }
});


if (hireContactForm) {
    hireContactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const formData = {
            name: document.getElementById('hire-name').value,
            email: document.getElementById('hire-email').value,
            service: document.getElementById('hire-service').value,
            details: document.getElementById('hire-project-details').value
        };
        
        console.log('Дані, які будуть відправлені:', formData);

  
        alert('Дякую, ' + formData.name + '! Ваш запит успішно надіслано.');
        

        hireModal.style.display = 'none';
        hireContactForm.reset();
        
    });
}
    