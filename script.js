/* =========================================================
   Codomax Web Dev Portfolio - Interactive Features
   Developer: Sumit Soni
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    // ---------------------------------------------------------
    // 1. Scroll-To-Top Dynamic Button
    // ---------------------------------------------------------
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.id = "scrollTopBtn";
    scrollTopBtn.setAttribute("aria-label", "Scroll to top");
    scrollTopBtn.innerHTML = "↑";
    document.body.appendChild(scrollTopBtn);

    // Apply button styling dynamically
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
        transition: "opacity 0.3s ease, transform 0.2s ease"
    });

    // Toggle button visibility on page scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // Smooth scroll trigger
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // ---------------------------------------------------------
    // 2. Contact Form Validation & User Feedback
    // ---------------------------------------------------------
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("userName");
    const emailInput = document.getElementById("userEmail");
    const messageInput = document.getElementById("userMessage");
    const successMsg = document.getElementById("formSuccess");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Reset error messages
            document.getElementById("nameError").textContent = "";
            document.getElementById("emailError").textContent = "";
            document.getElementById("messageError").textContent = "";
            successMsg.textContent = "";

            let isValid = true;

            // Name validation
            if (nameInput.value.trim().length < 3) {
                document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
                isValid = false;
            }

            // Email Regex validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                document.getElementById("emailError").textContent = "Please enter a valid email address.";
                isValid = false;
            }

            // Message length validation
            if (messageInput.value.trim().length < 10) {
                document.getElementById("messageError").textContent = "Message must be at least 10 characters long.";
                isValid = false;
            }

            // Success feedback
            if (isValid) {
                successMsg.textContent = `Thank you, ${nameInput.value.trim()}! Your message has been recorded.`;
                contactForm.reset();
            }
        });
    }
});