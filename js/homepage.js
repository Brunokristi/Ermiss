document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.querySelectorAll('.dot');

    // Initialize the first slide
    showSlide(slideIndex);

    // Show slide by index
    function showSlide(n) {
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
    }

    // Show specific slide when a dot is clicked
    function currentSlide(n) {
        slideIndex = n - 1;  // Adjust index to be zero-based
        showSlide(slideIndex);
    }

    // Show the next slide
    function showNextSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }

    dots.forEach((dot) => {
        dot.addEventListener('click', function () {
            const slideNumber = dot.getAttribute('data-slide');
            currentSlide(parseInt(slideNumber)); // Pass the slide number to currentSlide
        });
    });

    // Add click event for next slide arrow
    document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
        showNextSlide();
    });

    // Optional: Automatic slide change every 5 seconds
    //setInterval(showNextSlide, 5000);  // 5 seconds

    const imageMapping = {
        "../resources/photos_promoters/hostess_1.jpg": "../resources/photos_promoters/hostess_2.jpg",
        "../resources/photos_promoters/hostess_2.jpg": "../resources/photos_promoters/hostess_3.jpg",
        "../resources/photos_promoters/hostess_3.jpg": "../resources/photos_promoters/hostess_4.jpeg",
        "../resources/photos_promoters/hostess_4.jpeg": "../resources/photos_promoters/hostess_5.jpg",
        "../resources/photos_promoters/hostess_5.jpg": "../resources/photos_promoters/hostess_6.jpg",
        "../resources/photos_promoters/hostess_6.jpg": "../resources/photos_promoters/hostess_7.jpg",
        "../resources/photos_promoters/hostess_7.jpg": "../resources/photos_promoters/hostess_8.jpg",
        "../resources/photos_promoters/hostess_8.jpg": "../resources/photos_promoters/hostess_9.jpg",
        "../resources/photos_promoters/hostess_9.jpg": "../resources/photos_promoters/hostess_10.jpg",
        "../resources/photos_promoters/hostess_10.jpg": "../resources/photos_promoters/hostess_1.jpg",
    };

    const images = document.querySelectorAll('.images img');

    function changeImage() {
        var randomIndex = Math.floor(Math.random() * images.length);
        while (randomIndex > 12 && randomIndex < 17) {
            randomIndex = Math.floor(Math.random() * images.length);
        }

        img = images[randomIndex];
        const currentSrc = img.getAttribute('src');
        const newSrc = imageMapping[currentSrc];

        img.style.opacity = 0;

        setTimeout(() => {
            img.src = newSrc;
            img.style.opacity = 1;
        }, 500);
    }
    setInterval(changeImage, 2000);


});


