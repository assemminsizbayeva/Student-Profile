document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message, Assem will get back to you soon!');
    this.reset();
});
