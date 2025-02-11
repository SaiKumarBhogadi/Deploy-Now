document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});









document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("Your Public Key");
    document.getElementById("contractForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page reload

        const formData = {
            name: document.getElementById("contract-name").value,
            email: document.getElementById("contract-email").value,
            message: document.getElementById("contract-message").value
        };

        console.log("Sending form data:", formData); // Debugging

        // Send Email to Admin (ONLY ONCE)
        emailjs.send("Your Service Id", "Template id", formData)
            .then(function (response) {
                console.log("✅ Admin email sent:", response);

                // Send Auto-Reply to User (ONLY ONCE)
                return emailjs.send("service id", "auto reply id", {
                    name: formData.name,
                    email: formData.email, // Ensures user gets the auto-reply
                    message: formData.message
                });
            })
            .then(function (response) {
                console.log("✅ Auto-reply email sent to user:", response);
                alert("✅ Inquiry sent! A confirmation email has been sent to your inbox.");
                document.getElementById("contractForm").reset();
            })
            .catch(function (error) {
                console.error("❌ Email sending failed:", error);
                alert("❌ Failed to send inquiry. Please try again.");
            });
    });
});






