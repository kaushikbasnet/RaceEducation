// Continuous horizontal scrolling
window.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('blogPosts');
    const scrollAmount = 2; // Adjust scroll speed (in pixels)
    
    // Clone the first few elements to ensure continuous scrolling effect
    const children = Array.from(container.children);
    const clone1 = children.slice(0, 3).map(el => el.cloneNode(true));
    const clone2 = children.slice(3, 6).map(el => el.cloneNode(true));

    clone1.forEach(el => container.appendChild(el));
    container.appendChild(...clone2);

    // Start scrolling
    let scrollPos = 0;
    setInterval(function() {
        scrollPos += scrollAmount;
        container.scrollTo({
            left: scrollPos,
            behavior: 'smooth'
        });

        // Reset scroll position when it reaches the end
        if (scrollPos >= container.scrollWidth - container.offsetWidth) {
            scrollPos = 0;
            container.scrollTo({
                left: scrollPos,
                behavior: 'auto' // Change to 'auto' for immediate resetting
            });
        }
    }, 50); // Adjust the interval (milliseconds) as needed
});