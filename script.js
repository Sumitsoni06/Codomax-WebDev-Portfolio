// --- Wait for DOM to load ---
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll To Top Button Feature
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.id = "scrollTopBtn";
    scrollTopBtn.innerHTML = "↑";
    document.body.appendChild(scrollTopBtn);

    // Style button dynamically via JS DOM manipulation
    Object.assign(scrollTopBtn.style, {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        display: "none",
        padding: "10px 16px",
        fontSize: "18px",
        fontWeight: "bold",
        backgroundColor: "#38bdf8",
        color: "#0f172a",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: "1000",
        transition: "opacity 0.3s ease"
    });

    // Show/Hide button on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // Scroll smoothly to top on click
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 2. Contact Form Interactive Event
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for reaching out! Your message has been recorded.");
            contactForm.reset();
        });
    }
});