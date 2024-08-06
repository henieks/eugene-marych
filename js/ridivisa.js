document.addEventListener('DOMContentLoaded', (event) => {
   const container = document.getElementById('ridivisa-img__wrapper');
   const images = container.getElementsByClassName('ridivisa-img');

   function showImage(index) {
      for (let i = 0; i < images.length; i++) {
         images[i].style.display = i === index ? 'block' : 'none';
      }
   }

   container.addEventListener('mousemove', (e) => {
      const containerWidth = container.offsetWidth;
      const mouseX = e.clientX - container.getBoundingClientRect().left;

      // Ensure mouseX is within the container bounds
      if (mouseX >= 0 && mouseX <= containerWidth) {
         const sectionWidth = containerWidth / images.length;
         const index = Math.floor(mouseX / sectionWidth);
         showImage(index);
      }
   });

   container.addEventListener('mouseleave', (e) => {
      // Optionally, show the first or last image when the mouse leaves the container
      showImage(0);
   });

   // Initial display
   showImage(0);
});
