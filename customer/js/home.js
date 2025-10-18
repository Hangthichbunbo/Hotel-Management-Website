document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slider img");

  let index = 0;

  function autoScroll() {
    index++;
    if (index >= slides.length) {
      index = 0;
    }
    slider.scrollTo({
      left: slides[index].offsetLeft,
      behavior: "smooth",
    });
  }
  setInterval(autoScroll, 4000);

  // Ẩn và hiện Mobile Menu
  const mobileBtn = document.querySelector(".js-menu-btn");
  const mobile = document.querySelector(".js-nav");
  const mobileContainer = document.querySelector(".js-nav-container");

  function hideMobileMenu() {
    mobile.classList.remove("open");
  }

  mobile.addEventListener("click", hideMobileMenu);

  mobileContainer.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  mobileBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    mobile.classList.toggle("open");
  });
});
