document.addEventListener("DOMContentLoaded", function () {
    const column1 = document.getElementById('column1');
    const column2 = document.getElementById('column2');
    const column3 = document.getElementById('column3');

    // Define arrays of image names for each category
    const images = {
        'all': [], // This will include all images
        'golf':
            [
                'golf/IMG_0141.JPG',
                'golf/IMG_0142.JPG',
                'golf/IMG_3601.JPG',
                'golf/IMG_3602.JPG'
            ],

        'proma':
            [
                'proma/3bbd57d4-9796-45fa-91f2-6e2d2c346fe9.JPG',
                'proma/449679558_324522177381898_9189490142558970430_n.jpg',
                'proma/IMG_1401.JPG',
                'proma/IMG_1498.jpg',
                'proma/IMG_2513.JPG',
                'proma/IMG_9320.jpg',
                'proma/IMG_3597.JPG',
                'proma/IMG_3598.JPG',
                'proma/IMG_3610.JPG',
                'proma/IMG_7961.jpg',
                'proma/IMG_9944.jpg'

            ],

        'konferencie':
            [
                'firemne-vecierky/22ac2845-da46-4945-92a4-02b3cd6bda5c.jpeg',
                'firemne-vecierky/C6CBFCDE-291E-4BC5-92E7-85EC04AE1997.jpeg',
                'firemne-vecierky/db5fb75d-0d2f-4a48-a4a5-dee64d94d721.jpeg',
                'firemne-vecierky/ec252c1d-c16e-4c95-996e-ecdf6c880a73.jpeg',
                'firemne-vecierky/IMG_3606.JPG',
                'firemne-vecierky/IMG_4564.jpg',
                'firemne-vecierky/IMG_8239.jpg',
                'firemne-vecierky/Snímka obrazovky 2024-10-04 o 7.33.47.png'
            ],

        'politicke-akcie':
            [
                'politicke-akcie/371766029_742752390990070_5543516701976311087_n.jpg',
                'politicke-akcie/376402752_750194863579156_176601550707499301_n.jpg',
                'politicke-akcie/376764335_746361260629183_4281069825282475760_n.jpg',
                'politicke-akcie/376839501_746360980629211_774659885954157657_n.jpg',
                'politicke-akcie/376926001_746791983919444_4684315673756574403_n.jpg'
            ]
    };

    // Combine all images into the 'all' category and interleave them
    const interleaveImages = () => {
        const combinedImages = [];
        const maxLength = Math.max(
            images.golf.length,
            images.proma.length,
            images.konferencie.length,
            images['politicke-akcie'].length
        );

        // Interleave images from each category
        for (let i = 0; i < maxLength; i++) {
            if (images.golf[i]) combinedImages.push({ tag: 'golf', image: images.golf[i] });
            if (images.proma[i]) combinedImages.push({ tag: 'proma', image: images.proma[i] });
            if (images.konferencie[i]) combinedImages.push({ tag: 'konferencie', image: images.konferencie[i] });
            if (images['politicke-akcie'][i]) combinedImages.push({ tag: 'politicke-akcie', image: images['politicke-akcie'][i] });
        }

        return combinedImages;
    };

    const mixedImages = interleaveImages();

    // Function to distribute images evenly across three columns
    function distributeImagesAcrossColumns(images) {
        let currentColumn = 1;

        images.forEach(({ tag, image }, index) => {
            const img = document.createElement('img');
            img.src = `../resources/gallery_photos/${image}`;
            img.alt = `${tag} image`;
            img.classList.add('gallery-item', tag);

            // Distribute images into three columns
            if (currentColumn === 1) {
                column1.appendChild(img);
                currentColumn = 2;
            } else if (currentColumn === 2) {
                column2.appendChild(img);
                currentColumn = 3;
            } else {
                column3.appendChild(img);
                currentColumn = 1;
            }
        });
    }

    // Function to load images dynamically based on the selected tag
    function loadImages(tag) {
        // Clear all columns
        column1.innerHTML = '';
        column2.innerHTML = '';
        column3.innerHTML = '';

        // Load images from the selected tag
        const imageArray = tag === 'all' ? mixedImages : images[tag].map(image => ({ tag, image }));

        distributeImagesAcrossColumns(imageArray);
    }

    // Load all images initially
    loadImages('all');

    // Add click event listeners to filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterTag = button.getAttribute('data-filter');
            loadImages(filterTag);
        });
    });
});
