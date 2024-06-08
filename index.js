document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const indicators = document.querySelectorAll(".carousel-indicator");
    const totalItems = carouselItems.length;
    let currentIndex = 0;
    let interval;
  
    function showSlide(index) {
      const percentage = -index * 100;
      document.querySelector(".carousel-inner").style.transform = `translateX(${percentage}%)`;
      document.querySelector(".carousel-indicator.active").classList.remove("active");
      indicators[index].classList.add("active");
    }
  
    function nextSlide() {
      currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
      showSlide(currentIndex);
    }
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index;
        showSlide(currentIndex);
      });
    });
  
    function startAutoSlide() {
      interval = setInterval(nextSlide, 5000);
    }
  
    function stopAutoSlide() {
      clearInterval(interval);
    }
  
    document.querySelector(".carousel").addEventListener("mouseenter", stopAutoSlide);
    document.querySelector(".carousel").addEventListener("mouseleave", startAutoSlide);
  
    startAutoSlide(); // Start auto-scrolling
  });
  