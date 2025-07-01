document.addEventListener('DOMContentLoaded', function() {

    // --- Configuration ---
    // Add your image file names here. The path is relative to the `gojoy_models_images` folder.
    const imageFiles = [
        'model01.png',
        'model02.png',
        'model03.png',
        'model04.png',
        'model05.png',
        'model06.png',
        'model07.png',
        'model08.png',
        'model09.png',
        'model10.png',
        'model11.png',
        'model12.png',
        'model13.png'
    ];

    const imagePath = 'gojoy_models_images/';

    // --- Element References ---
    const galleryContainer = document.getElementById('gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const closeButton = document.querySelector('.close-button');

    // --- Functions ---

    /**
     * Dynamically creates and populates the image gallery.
     */
    function createGallery() {
        if (!galleryContainer) return;

        imageFiles.forEach(fileName => {
            // Create the gallery item container
            const item = document.createElement('div');
            item.className = 'gallery-item';

            // Create the image element
            const img = document.createElement('img');
            const fullPath = imagePath + fileName;
            img.src = fullPath;
            img.alt = fileName; // Use filename as alt text

            // Create the caption overlay
            const captionOverlay = document.createElement('div');
            captionOverlay.className = 'caption-overlay';
            // Clean up the filename for display (e.g., 'model01.png' -> 'model01')
            captionOverlay.textContent = fileName.split('.').slice(0, -1).join('.');

            // Append image and caption to the item
            item.appendChild(img);
            item.appendChild(captionOverlay);

            // Add click event listener to open the modal
            item.addEventListener('click', () => {
                openModal(fullPath, captionOverlay.textContent);
            });

            // Append the item to the gallery container
            galleryContainer.appendChild(item);
        });
    }

    /**
     * Opens the modal with the specified image and caption.
     * @param {string} src - The source path of the image to display.
     * @param {string} caption - The caption text to display.
     */
    function openModal(src, caption) {
        modal.style.display = 'flex'; // Use flex for centering
        modalImage.src = src;
        captionText.textContent = caption;
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    /**
     * Closes the modal view.
     */
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // --- Event Listeners ---

    // Close the modal when the close button is clicked
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Close the modal when clicking outside the image
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) { // Check if the click is on the modal background itself
                closeModal();
            }
        });
    }
    
    // Close the modal with the Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // --- Initialization ---
    createGallery();

});
