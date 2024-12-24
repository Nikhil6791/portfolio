document.addEventListener("DOMContentLoaded", () =>{
  let currentslide = 0;
  const slides = document.querySelectorAll(".carousel-item");
  const totalslides = slides.length;
  console.log(totalslides);
  
  document.querySelector(".next").addEventListener("click", () => {
    slides[currentslide].classList.remove("active");
    currentslide = (currentslide + 1) % totalslides;
    slides[currentslide].classList.add("active");
  });
  
  document.querySelector(".prev").addEventListener("click", () => {
    slides[currentslide].classList.remove("active");
    currentslide = (currentslide - 1 + totalslides) % totalslides;
    slides[currentslide].classList.add("active");
  });
  
  const menuIcon = document.getElementById("menuIcon");
  const popupMenu = document.getElementById("popupMenu");
  
  menuIcon.addEventListener("click", (event) => {
    event.preventDefault();
    popupMenu.classList.toggle("hidden");
  });
});

