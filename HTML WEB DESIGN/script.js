
  function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }


  let currentSlide = 1;
const totalSlides = document.querySelectorAll('.slide').length;

function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide > totalSlides) {
    currentSlide = 1;
  } else if (currentSlide < 1) {
    currentSlide = totalSlides;
  }
  document.getElementById(`radio${currentSlide}`).checked = true;
}

function nextSlide() {
  moveSlide(1);
}

setInterval(nextSlide, 5000);
   document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".video-frame");
  
  videos.forEach((video) => {
  let src = video.src; 
  
  video.addEventListener("mouseenter", function () {
    video.src = src.includes("&autoplay=1") ? src : src + "&autoplay=1"; 
  });
  
  video.addEventListener("mouseleave", function () {
    video.src = src; 
  });
  });
  });
