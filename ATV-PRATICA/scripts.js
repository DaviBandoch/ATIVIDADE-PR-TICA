document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contact-btn');
    const contactForm = document.getElementById('contact-form');

    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Obrigado por entrar em contato! Sua mensagem foi enviada.');
            contactForm.reset();
        });
    }
});
