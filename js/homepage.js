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

    setInterval(showNextSlide, 3000)

    const all_images = [
        "hostess_1.jpg",
        "hostess_2.jpg",
        "hostess_3.jpg",
        "hostess_4.jpg",
        "hostess_5.jpg",
        "hostess_6.jpg",
        "hostess_7.jpg",
        "hostess_8.jpg",
        "hostess_9.jpg",
        "hostess_10.jpg",
        "hostess_11.jpg",
        "hostess_12.jpg",
        "hostess_13.jpg",
        "hostess_14.jpg",
        "hostess_15.jpg",
        "hostess_16.jpg",
        "hostess_17.jpg",
        "hostess_18.jpg",
        "hostess_19.jpg",
        "hostess_20.jpg",
    ];

    function changeImage() {
        var images = document.querySelectorAll('.images img');
        var randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * images.length);
        } while (randomIndex >= 7 && randomIndex <= 9);

        var img = images[randomIndex];

        var displayedImageSrcs = Array.from(images).map(img => img.src);
        var displayedImages = [];

        for (var i = 0; i < displayedImageSrcs.length; i++) {
            displayedImages.push(displayedImageSrcs[i].split('/').pop());
        }


        var missingImages = [];
        for (var i = 0; i < all_images.length; i++) {
            if (!displayedImages.includes(all_images[i])) {
                missingImages.push(all_images[i]);
            }
        }

        // Change image if there are missing images
        if (missingImages.length > 0) {
            var newSrc = "../resources/photos_promoters/" + missingImages[0];

            img.style.opacity = 0;
            setTimeout(() => {
                img.src = newSrc;
                img.style.opacity = 1;
            }, 1000);
        }
    }

    setInterval(changeImage, 4000);


    $(document).ready(function () {
        $("#navbar").load("navbar.html");
        $("#footer").load("footer.html");
    });


});


