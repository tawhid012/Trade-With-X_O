document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code to simulate typing animation
    const text = "Trade With X_O";
    let index = 0;
    const typedTextElement = document.querySelector('.typed-text');

    function type() {
        if (typedTextElement && index < text.length) {
            typedTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust the typing speed here (in milliseconds)
        } else {
            setTimeout(removeLoadingScreen, 2000); // Remove loading screen after 2 seconds
        }
    }

    function removeLoadingScreen() {
        const loadingElement = document.getElementById('loading');
        if (loadingElement) {
            loadingElement.style.display = 'none';
        }
    }

    type(); // Start typing animation
});
