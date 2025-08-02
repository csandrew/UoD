document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.createElement("div");

    // Create a hamburger menu icon
    menuToggle.innerHTML = "&#9776;"; // Hamburger icon
    menuToggle.style.fontSize = "30px";
    menuToggle.style.color = "white";
    menuToggle.style.cursor = "pointer";
    menuToggle.style.display = "none"; // Hidden by default
    menuToggle.style.position = "absolute";
    menuToggle.style.top = "15px";
    menuToggle.style.right = "20px";
    document.querySelector("nav").prepend(menuToggle);

    // Toggle navigation menu on click
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    function adjustMenuDisplay() {
        if (window.innerWidth < 768) { // Mobile view
            menuToggle.style.display = "block"; // Show hamburger icon
            navLinks.style.display = navLinks.classList.contains("active") ? "flex" : "none";
        } else { // Desktop view
            menuToggle.style.display = "none"; // Hide hamburger icon
            navLinks.style.display = "flex"; // Always show menu
        }
    }

    // Adjust menu on resize
    window.addEventListener("resize", adjustMenuDisplay);
    adjustMenuDisplay(); // Initial check on page load

    // Swiper Slider Initialization
    var swiper = new Swiper(".mySwiper", {
        loop: true, // Infinite looping
        autoplay: {
            delay: 4000, // Auto-advance every 4 seconds
            disableOnInteraction: false, // Continue autoplay after use interaction
        },
        navigation: {
            nextEl: ".swiper-button-next", // Next button selector
            prevEl: ".swiper-button-prev", // Previous button selector
        },
        pagination: {
            el: ".swiper-pagination", // Pagination dots container
            clickable: true, //Allow clicking dots to navigate
        },
    });
});
