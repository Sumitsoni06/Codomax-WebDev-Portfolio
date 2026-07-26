document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll To Top Button Feature
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.id = "scrollTopBtn";
    scrollTopBtn.innerHTML = "↑";
    document.body.appendChild(scrollTopBtn);

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

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 2. Day 10 Form Validation
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("userName");
    const emailInput = document.getElementById("userEmail");
    const messageInput = document.getElementById("userMessage");
    const successMsg = document.getElementById("formSuccess");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Clear previous state
            document.getElementById("nameError").textContent = "";
            document.getElementById("emailError").textContent = "";
            document.getElementById("messageError").textContent = "";
            successMsg.textContent = "";

            let isValid = true;

            if (nameInput.value.trim().length < 3) {
                document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
                isValid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                document.getElementById("emailError").textContent = "Please enter a valid email address.";
                isValid = false;
            }

            if (messageInput.value.trim().length < 10) {
                document.getElementById("messageError").textContent = "Message must be at least 10 characters long.";
                isValid = false;
            }

            if (isValid) {
                successMsg.textContent = "Thank you, " + nameInput.value + "! Your message has been sent successfully.";
                contactForm.reset();
            }
        });
    }
});