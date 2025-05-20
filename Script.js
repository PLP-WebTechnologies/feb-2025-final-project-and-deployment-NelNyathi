document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.textContent = 'Liked!';
      });
    });
  
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
      });
    }
  });