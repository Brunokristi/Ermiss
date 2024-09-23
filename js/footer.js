document.addEventListener("DOMContentLoaded", function () {
    const emailLink = document.getElementById("emailLink");
    const contactForm = document.querySelector(".contact");

    emailLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        contactForm.style.display = "block"; // Show the form
    });

    // Close the form when clicking outside of it
    document.addEventListener("click", function (e) {
        if (!contactForm.contains(e.target) && e.target !== emailLink) {
            contactForm.style.display = "none"; // Hide the form
        }
    });
});