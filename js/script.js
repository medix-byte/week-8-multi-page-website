// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Example: Contact form validation (in contact.html)
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  if (name === "" || email === "") {
    alert("Please fill in all fields.");
    return false;
  }
  return true;
}
