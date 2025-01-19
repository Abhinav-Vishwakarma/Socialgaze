document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".homepage_img");
  
    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          el.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on load in case elements are already in view
  });

  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
  
    const handleAnimation = () => {
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
  
        if (isVisible) {
          img.classList.add("animate");
          img.classList.remove("exiting");
        } else {
          img.classList.remove("animate");
          img.classList.add("exiting");
        }
      });
    };
  
    window.addEventListener("scroll", handleAnimation);
    handleAnimation(); // Initial check for images already in view
  });
  
  
  