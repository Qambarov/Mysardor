window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  const navigationItems = document.querySelectorAll(".navigation a");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
  navigationItems.forEach((navItems) => {
    navItems.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    });
  });
  const scrollBtn = document.querySelector(".scroll-btn");
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  });
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
