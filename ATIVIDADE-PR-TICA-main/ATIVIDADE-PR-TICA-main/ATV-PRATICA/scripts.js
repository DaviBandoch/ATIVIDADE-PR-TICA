document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contact-btn');
    const contactForm = document.getElementById('contact-form');
    const messageInput = document.getElementById('message');

    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const message = encodeURIComponent(messageInput.value);
            const phoneNumber = '5541991382403'; 
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

            window.open(whatsappUrl, '_blank');
            contactForm.reset();
        });
    }
});
