export default function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const submitBtn = form?.querySelector('button[type="submit"]');

  if (!form || !status) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Désactiver le bouton pendant l'envoi
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    status.textContent = "";
    status.className = "";

    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        status.textContent = "✓ Message sent successfully!";
        status.className = "text-green-700 bg-green-100";
        form.reset();
      } else {
        status.textContent = `✗ ${result.error || "An error occurred. Please try again."}`;
        status.className = "text-red-700 bg-red-100";
      }
    } catch (error) {
      status.textContent = "✗ Network error. Please check your connection.";
      status.className = "text-red-700 bg-red-100";
    } finally {
      // Réactiver le bouton
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
}
