document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0; // Height of the navigation bar
    const offsetExtra = 40; // Additional offset space (adjust as needed)

    // Dropdown menus
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        if (dropdownContent) {
            dropdownContent.style.display = 'none'; // Initial hide

            dropdown.addEventListener('mouseenter', function() {
                dropdownContent.style.display = 'block';
            });

            dropdown.addEventListener('mouseleave', function() {
                dropdownContent.style.display = 'none';
            });
        }
    });

    // Smooth scroll to anchor links
    const links = document.querySelectorAll('nav ul li a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                let offsetTop = targetElement.offsetTop - navbarHeight - offsetExtra;
                const headingElement = targetElement.querySelector('h2, h3');
                if (headingElement) {
                    offsetTop = headingElement.offsetTop - navbarHeight - offsetExtra;
                }

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hide or show navbar on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll down
            if (navbar) {
                navbar.classList.add('nav-hidden');
            }
        } else {
            // Scroll up
            if (navbar) {
                navbar.classList.remove('nav-hidden');
            }
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

        const slides = document.querySelectorAll('.slide');
        const slideCount = slides.length;
        let index = 0;
    
        function showSlide(idx) {
            // Hide all slides
            slides.forEach(slide => slide.style.display = 'none');
            // Display the selected slide
            slides[idx].style.display = 'block';
        }
    
        function nextSlide() {
            index = (index + 1) % slideCount;
            showSlide(index);
        }
    
});
