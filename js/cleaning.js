document.addEventListener('DOMContentLoaded', (event) => {
   const container = document.querySelector('.cleaning-container');
   const cleaning = document.querySelector('.cleaning');
   const maxScrollLeft = -850; // максимальное смещение влево

   function handleMouseMove(e) {
      const containerWidth = container.offsetWidth;
      const mouseX = e.clientX - container.getBoundingClientRect().left;

      if (mouseX >= 0 && mouseX <= containerWidth) {
         const percentage = mouseX / containerWidth;
         const scrollLeft = maxScrollLeft * percentage;
         cleaning.style.transform = `translateX(${scrollLeft}px)`;
      }
   }

   function checkWindowSize() {
      if (window.innerWidth > 700) {
         container.addEventListener('mousemove', handleMouseMove);
      } else {
         container.removeEventListener('mousemove', handleMouseMove);
         cleaning.style.transform = 'translateX(0px)'; // возврат к исходному положению
      }
   }

   window.addEventListener('resize', checkWindowSize);

   // Initial setup
   checkWindowSize();
});