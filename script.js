document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you can add code to send the form data to your backend or handle it as needed
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
});
