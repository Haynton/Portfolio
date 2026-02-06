export default function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form || !status) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        status.textContent = "Message sent successfully.";
        form.reset();
      } else {
        status.textContent = "An error occurred. Please try again.";
      }
    } catch {
      status.textContent = "Network error.";
    }
  });
}
