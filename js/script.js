const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileDropdownMenu = document.getElementById("mobile-dropdown-menu");

mobileMenuToggle.addEventListener("click", () => {
  mobileDropdownMenu.classList.toggle("active");
});